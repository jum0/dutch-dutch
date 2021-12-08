import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  textType?: keyof typeof textStyle;
  styles?: React.CSSProperties;
}

type StyledProps = Omit<TextProps, 'children'>;

const textStyle = {
  NORMAL: css`
    font-weight: 400;
  `,
  BOLD: css`
    font-weight: 500;
  `,
};

const Container = styled.div<StyledProps>`
  ${({ textType }) => textType && textStyle[textType]}
`;

const Text = ({ children, textType = 'NORMAL', styles }: TextProps) => (
  <Container textType={textType} style={styles}>
    {children}
  </Container>
);

export default Text;
