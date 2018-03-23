import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// Global style
// eslint-disable-next-line
injectGlobal`
  html, body, div#app {
    padding: 0;
    margin: 0;
    height: 100%;
    min-height: 100%;
  }
  body {
    background-color: ghostwhite;
    font-family: arial;
  }
`
