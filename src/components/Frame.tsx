import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface FrameProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 40rem;
  margin: auto;
  padding: 2rem;
  height: 100%;
`;

const Frame = ({ children }: FrameProps) => <Container>{children}</Container>;

export default Frame;
