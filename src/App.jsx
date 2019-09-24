import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Navbar from './Components/Common/Navbar/Navbar';
import KanitMedium from './assets/fonts/Kanit-Medium.ttf';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };

  @font-face{
    font-family: "Kanit Medium";
    src: url(${KanitMedium});
  }
`;

function App() {
  return (
    <main id="nexthouse-grand-wrapper">
      <GlobalStyle />
      <Navbar />
    </main>
  );
}

export default App;
