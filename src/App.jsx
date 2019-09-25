import React, {useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import Navbar from './Components/Common/Navbar/Navbar';
import Menu from './Components/Common/Menu/Menu';

import KanitMedium from './assets/fonts/Kanit-Medium.ttf';
import KanitBold from './assets/fonts/Kanit-Bold.ttf';
import KanitExtraBold from './assets/fonts/Kanit-ExtraBold.ttf';

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

  @font-face{
    font-family: "Kanit Bold";
    src: url(${KanitBold});
  }

  @font-face{
    font-family: "Kanit EXtraBold";
    src: url(${KanitExtraBold});
  }

  a{
    text-decoration: none;
  }
`;

function App() {

  const [isOpen, setState] = useState(false);

  return (
    <main id="nexthouse-grand-wrapper">
      <GlobalStyle />

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="menu-anime"
        unmountOnExit
      >
         <Menu />
      </CSSTransition>

      <Navbar isOpen={isOpen} onClick={() => setState(state => !state ? true : false)} />
    </main>
  );
}

export default App;
