import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Frame, Logo, Text } from '../components';
import { ALERT_MESSAGE, PATH, SESSION_STORAGE_KEY, THEME_COLOR } from '../constants';
import { getSessionStorage, removeSessionStorage, setSessionStorage } from '../utils';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CountInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 4rem;
`;

const Input = styled.input`
  width: 3rem;
  height: 2rem;
  border: 0.1rem solid ${THEME_COLOR.PRIMARY};
  border-radius: 0.5rem;
  background-color: transparent;
  text-align: center;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const handleCountInputFocus = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    if (target.value.match(/^0/g)) {
      target.value = '';
    }
  };

  const handleCountInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setCount(target.valueAsNumber);

  const goNextPage = () => {
    if (8 < count || count < 2) {
      alert(ALERT_MESSAGE.NEED_VALID_COUNT);

      return;
    }

    if (count !== getSessionStorage(SESSION_STORAGE_KEY.COUNT)) {
      removeSessionStorage(SESSION_STORAGE_KEY.DUTCH_LIST);
    }

    setSessionStorage(SESSION_STORAGE_KEY.COUNT, count);
    navigate(PATH.FILLING_OUT);
  };

  useEffect(() => {
    const historyCount = getSessionStorage(SESSION_STORAGE_KEY.COUNT);

    if (!historyCount) return;

    setCount(historyCount);
  }, []);

  return (
    <Frame>
      <Container>
        <Logo />
        <Text textType="BOLD" styles={{ margin: '4rem 0 1rem' }}>
          더치페이 하는 사람은 몇 명인가요
        </Text>
        <CountInput>
          <Input
            type="number"
            value={count}
            onFocus={(event) => handleCountInputFocus(event)}
            onChange={(event) => handleCountInputChange(event)}
          />
          <Text>명</Text>
        </CountInput>
        <Button onClick={goNextPage}>다음</Button>
      </Container>
    </Frame>
  );
};

export default HomePage;
