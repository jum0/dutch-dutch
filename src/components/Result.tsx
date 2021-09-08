import styled from '@emotion/styled';

interface ResultProps {
  sender?: string;
  receiver?: string;
  cost?: number;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
    6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
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
  color: grey;
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
    <Cost>{cost}</Cost>
  </Container>
);

export default Result;
