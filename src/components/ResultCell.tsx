import styled from '@emotion/styled';
import { PALETTE } from '../constants';

interface ResultCellProps {
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
  padding: 0.5rem;
  margin: 0.3rem 0;
  gap: 1rem;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const Postposition = styled.div`
  color: ${PALETTE.GREEN500};
`;

const ResultCell = ({ sender, receiver, cost }: ResultCellProps) => (
  <Container>
    <Name>
      <div>{sender}</div>
      <Postposition>(이)가</Postposition>
    </Name>
    <Name>
      <div>{receiver}</div>
      <Postposition>에게</Postposition>
    </Name>
    <div>{cost.toLocaleString()}</div>
  </Container>
);

export default ResultCell;
