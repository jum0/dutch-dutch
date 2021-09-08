import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background-color: #efefef;
  border: none;
  border-radius: 0.5rem;
  color: #444;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
    6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
      2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Button = ({ children, styles, onClick }: ButtonProps) => (
  <Container style={styles} onClick={onClick}>
    {children}
  </Container>
);

export default Button;
