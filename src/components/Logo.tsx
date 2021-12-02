import styled from '@emotion/styled';
import logoImg from '../assets/logo.png';

interface LogoProps {
  width?: string;
}

const Container = styled.div<{ width: string }>`
  width: ${({ width }) => width};
`;

const Logo = ({ width = '8rem' }: LogoProps) => (
  <Container width={width}>
    <img src={logoImg} alt="로고 이미지" width="100%" />
  </Container>
);

export default Logo;
