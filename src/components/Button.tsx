import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { PALETTE, THEME_COLOR } from '../constants';

interface ButtonProps {
  children: ReactNode;
  buttonType: keyof typeof buttonStyle;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

type StyledProps = Omit<ButtonProps, 'children' | 'onClick'>;

const buttonStyle = {
  FILLED: css`
    color: ${PALETTE.WHITE};
    background-color: ${THEME_COLOR.PRIMARY};

    &:hover {
      background-color: ${PALETTE.GREEN900};
    }
  `,
  BORDERED: css`
    color: ${THEME_COLOR.PRIMARY};
    background-color: transparent;
    border: 0.1rem solid ${THEME_COLOR.PRIMARY};

    &:hover {
      color: ${PALETTE.WHITE};
      background-color: ${PALETTE.GREEN500};
      border: 0.1rem solid ${PALETTE.GREEN500};
    }
  `,
};

const Container = styled.button<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  border-radius: 0.7rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  ${({ buttonType }) => buttonStyle[buttonType]}
`;

const Button = ({ children, buttonType, styles, onClick }: ButtonProps) => (
  <Container buttonType={buttonType} style={styles} onClick={onClick}>
    {children}
  </Container>
);

export default Button;
