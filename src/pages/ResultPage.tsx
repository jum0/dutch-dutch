import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { Frame, Logo, ResultCell, Button, IconButton } from '../components';
import { getSessionStorage, removeSessionStorage } from '../utils';
import { getResult } from '../service';
import { SESSION_STORAGE_KEY } from '../constants';
import { ArrowBackIcon } from '../assets/Icons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const IconLogoNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0 3rem;
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const dutchList = getSessionStorage(SESSION_STORAGE_KEY.DUTCH_LIST);

  const reset = () => {
    removeSessionStorage(SESSION_STORAGE_KEY.COUNT);
    removeSessionStorage(SESSION_STORAGE_KEY.DUTCH_LIST);

    navigate(-2);
  };

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
        <Result>
          {getResult(dutchList).map(({ sender, receiver, cost }, index) => (
            <li key={index}>
              <ResultCell sender={sender} receiver={receiver} cost={cost} />
            </li>
          ))}
        </Result>
        <Button onClick={reset}>처음부터 다시 하기</Button>
      </Container>
    </Frame>
  );
};

export default ResultPage;
