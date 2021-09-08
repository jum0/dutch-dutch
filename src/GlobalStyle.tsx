import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
      }

      html,
      body,
      #root {
        min-height: 100%;
        height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        background-color: #efefef;
      }

      li {
        list-style: none;
      }

      // input 숫자 화살표 삭제
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      /* Firefox */
      input[type='number'] {
        -moz-appearance: textfield;
      }
    `}
  />
);

export default GlobalStyle;
