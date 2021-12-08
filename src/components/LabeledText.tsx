import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Text } from '.';

interface LabeledTextProps {
  children: ReactNode;
  label: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const LabeledText = ({ children, label }: LabeledTextProps) => {
  return (
    <Container>
      <Text textType="BOLD">{label}</Text>
      <Text>{children}</Text>
    </Container>
  );
};

export default LabeledText;
