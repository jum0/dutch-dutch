import { useState } from 'react';
import styled from '@emotion/styled';
import { getResult } from '../service';
import { ALERT_MESSAGE } from '../constants';
import { Button, Frame, PersonInfo, Result, Logo } from '../components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0 2rem;
`;

const CalculationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [personList, setPersonList] = useState([{ name: '', cost: 0 }]);
  const [result, setResult] = useState<{ sender?: string; receiver?: string; cost?: number }[]>([
    {},
  ]);

  const calculate = () => {
    // TODO: 로직 분리
    if (personList.length < 2) {
      alert(ALERT_MESSAGE.NEED_MIN_PEOPLE);

      return;
    }

    if (personList.some((person) => person.name === '')) {
      alert(ALERT_MESSAGE.NEED_NAME);

      return;
    }

    if (personList.some((person) => isNaN(person.cost))) {
      alert(ALERT_MESSAGE.NEED_COST);

      return;
    }

    if (personList.every((person) => person.cost === 0)) {
      alert(ALERT_MESSAGE.NEED_COST_NOT_ZERO);

      return;
    }

    if (new Set(personList.map((person) => person.cost)).size === 1) {
      alert(ALERT_MESSAGE.NEED_DIFFERENT_COST);

      return;
    }

    setResult(getResult(personList));
  };

  const reset = () => {
    setPersonList([{ name: '', cost: 0 }]);
    setResult([{}]);
  };

  const addPerson = () => {
    setPersonList([...personList, { name: '', cost: 0 }]);
  };

  return (
    <Frame>
      <Container>
        <Logo />
        <UpperContainer>
          <Button buttonType="BORDERED" styles={{ maxWidth: '4rem' }} onClick={reset}>
            초기화
          </Button>
          <Button buttonType="BORDERED" styles={{ maxWidth: '4rem' }} onClick={addPerson}>
            추가
          </Button>
        </UpperContainer>
        <PersonInfo personList={personList} setPersonList={setPersonList} />
        <CalculationContainer>
          <Button buttonType="FILLED" onClick={calculate}>
            계산
          </Button>
        </CalculationContainer>

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
