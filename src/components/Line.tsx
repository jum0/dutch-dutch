import styled from '@emotion/styled';
import React from 'react';
import { THEME_COLOR } from '../constants';

interface LineProps {
  styles?: React.CSSProperties;
}

const Container = styled.div<LineProps>`
  width: 100%;
  height: 0.0625rem;
  background-color: ${THEME_COLOR.PRIMARY};
  margin: 2rem 0;
`;

const Line = ({ styles }: LineProps) => <Container styles={styles}></Container>;

export default Line;
