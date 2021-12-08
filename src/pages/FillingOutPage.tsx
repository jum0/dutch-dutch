import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { Frame, Logo, Text, Button, Line, LabeledText, IconButton } from '../components';
import { getSessionStorage, setSessionStorage } from '../utils';
import { ALERT_MESSAGE, PATH, SESSION_STORAGE_KEY, THEME_COLOR } from '../constants';
import { ArrowBackIcon } from '../assets/Icons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  height: 100%;
`;

const IconLogoNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameCostInput = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.25rem 0;
`;

const Input = styled.input`
  width: 6rem;
  height: 2rem;
  border: 0.1rem solid ${THEME_COLOR.PRIMARY};
  border-radius: 0.5rem;
  background-color: transparent;
  text-align: center;
`;

const FillingOutPage = () => {
  const navigate = useNavigate();
  const count = getSessionStorage(SESSION_STORAGE_KEY.COUNT);
  const [dutchList, setDutchList] = useState([...Array(count)].map(() => ({ name: '', cost: 0 })));
  const totalCost = dutchList.reduce((pre, cur) => pre + cur.cost, 0);

  const handleNameInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const list = [...dutchList];

    list[index].name = target.value;
    setDutchList(list);
  };

  const handleCostInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const list = [...dutchList];

    list[index].cost = target.valueAsNumber;
    setDutchList(list);
  };

  const handleCostInputFocus = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    if (target.value.match(/^0/g)) {
      target.value = '';
    }
  };

  const handleCostInputBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    if (isNaN(target.valueAsNumber)) {
      target.valueAsNumber = 0;
    }
  };

  const calculate = () => {
    // TODO: 로직 분리
    if (dutchList.some(({ name }) => name === '' || name.match(/\s/g))) {
      alert(ALERT_MESSAGE.NEED_NAME);

      return;
    }

    if (dutchList.some(({ cost }) => isNaN(cost))) {
      alert(ALERT_MESSAGE.NEED_COST);

      return;
    }

    if (dutchList.some(({ cost }) => cost < 0)) {
      alert(ALERT_MESSAGE.NEED_COST_NOT_NEGATIVE_NUMBER);

      return;
    }

    if (dutchList.every(({ cost }) => cost === 0)) {
      alert(ALERT_MESSAGE.NEED_COST_NOT_ZERO);

      return;
    }

    if (new Set(dutchList.map(({ cost }) => cost)).size === 1) {
      alert(ALERT_MESSAGE.NEED_DIFFERENT_COST);

      return;
    }

    navigate(PATH.RESULT, { state: { dutchList: dutchList } });
    setSessionStorage(SESSION_STORAGE_KEY.DUTCH_LIST, dutchList);
  };

  useEffect(() => {
    const historyDutchList = getSessionStorage(SESSION_STORAGE_KEY.DUTCH_LIST);

    if (!historyDutchList) return;

    setDutchList(historyDutchList);
  }, []);

  return (
    <Frame>
      <Container>
        <IconLogoNav>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon width="2rem" />
          </IconButton>
          <Logo />
          <div style={{ width: '2rem' }}></div>
        </IconLogoNav>
        <Text textType="BOLD" styles={{ margin: '4rem 0 2rem' }}>
          이름과 각자 부담한 금액을 입력해 주세요
        </Text>
        {dutchList.map((dutch, index) => (
          <NameCostInput key={index}>
            <Input
              type="text"
              placeholder="이름"
              value={dutch.name}
              onChange={(event) => handleNameInputChange(event, index)}
            />
            <Input
              type="number"
              placeholder="금액"
              value={dutch.cost}
              onFocus={(event) => handleCostInputFocus(event)}
              onBlur={(event) => handleCostInputBlur(event)}
              onChange={(event) => handleCostInputChange(event, index)}
            />
          </NameCostInput>
        ))}
        <Line />
        <LabeledText label="전체 금액">{totalCost.toLocaleString()}</LabeledText>
        <LabeledText label="1인당 부담 금액">
          {(totalCost / dutchList.length).toLocaleString()}
        </LabeledText>
        <Line />
        <Button styles={{ marginTop: '1rem' }} onClick={calculate}>
          계산하기
        </Button>
      </Container>
    </Frame>
  );
};

export default FillingOutPage;
