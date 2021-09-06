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
      }

      li {
        list-style: none;
      }
    `}
  />
);

export default GlobalStyle;
