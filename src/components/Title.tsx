import styled from '@emotion/styled';

interface TitleProps {
  title: string;
}

const Container = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  margin: 2rem 0;
`;

const Title = ({ title }: TitleProps) => <Container>{title}</Container>;

export default Title;
