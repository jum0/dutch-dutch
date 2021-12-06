import styled from '@emotion/styled';
import { PALETTE } from '../constants';

interface ResultProps {
  sender: string;
  receiver: string;
  cost: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.7rem;
  color: ${PALETTE.GREEN900};
  background-color: transparent;
  border: 0.1rem solid ${PALETTE.GREEN900};
  padding: 1rem;
  margin: 0.3rem 0;
  gap: 1rem;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const Sender = styled.div``;

const Receiver = styled.div``;

const Cost = styled.div``;

const Postposition = styled.div`
  color: ${PALETTE.GREEN500};
`;

const Result = ({ sender, receiver, cost }: ResultProps) => (
  <Container>
    <NameContainer>
      <Sender>{sender}</Sender>
      <Postposition>(이)가</Postposition>
    </NameContainer>
    <NameContainer>
      <Receiver>{receiver}</Receiver>
      <Postposition>에게</Postposition>
    </NameContainer>
    <Cost>{cost.toLocaleString()}</Cost>
  </Container>
);

export default Result;
