import { useState } from 'react';
import styled from '@emotion/styled';
import Frame from '../components/Frame';
import Title from '../components/Title';
import InputContainer from '../components/InputContainer';
import Button from '../components/Button';
import { getResult } from '../service';
import Result from '../components/Result';
import { ALERT_MESSAGE } from '../constants/message';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ResetCalculationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0 2rem;
`;

const Home = () => {
  const [inputLists, setInputList] = useState([{ name: '', cost: 0 }]);
  const [result, setResult] = useState<{ sender?: string; receiver?: string; cost?: number }[]>([
    {},
  ]);

  const calculate = () => {
    if (inputLists.length < 2) {
      alert(ALERT_MESSAGE.NEED_MIN_NUMBER_OF_INPUT_LIST);

      return;
    }

    if (inputLists.some((inputList) => inputList.name === '')) {
      alert(ALERT_MESSAGE.NEED_NAME);

      return;
    }

    if (inputLists.every((inputList) => inputList.cost === 0)) {
      alert(ALERT_MESSAGE.NEED_COST);

      return;
    }

    setResult(getResult(inputLists));
  };

  const reset = () => {
    setInputList([{ name: '', cost: 0 }]);
    setResult([{}]);
  };

  return (
    <Frame>
      <Container>
        <Title title="더치더치" />
        <InputContainer inputLists={inputLists} setInputList={setInputList} />

        <ResetCalculationContainer>
          <Button styles={{ width: '30%' }} onClick={reset}>
            초기화
          </Button>
          <Button styles={{ width: '30%' }} onClick={calculate}>
            계산하기
          </Button>
        </ResetCalculationContainer>

        <ResultContainer>
          {!!Object.keys(result[0]).length &&
            result.map(({ sender, receiver, cost }, index) => (
              <li key={index}>
                <Result sender={sender} receiver={receiver} cost={cost} />
              </li>
            ))}
        </ResultContainer>
      </Container>
    </Frame>
  );
};

export default Home;
