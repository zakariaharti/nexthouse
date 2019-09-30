import React, {useState, useEffect} from 'react';
import { createGlobalStyle } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import * as L from 'leaflet/dist/leaflet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Common/Navbar/Navbar';
import Menu from './Components/Common/Menu/Menu';
import Hero from './Components/Hero/Hero';
import Carrousel from './Components/Carrousel/Carrousel';
import SectionTwo from './Components/SectionTwo/SectionTwo';
import PageProject from './Components/PageProject/PageProject';

import KanitRegular from './assets/fonts/Kanit-Regular.ttf';
import KanitMedium from './assets/fonts/Kanit-Medium.ttf';
import KanitBold from './assets/fonts/Kanit-Bold.ttf';
import KanitLight from './assets/fonts/Kanit-Light.ttf';
import KanitSemiBold from './assets/fonts/Kanit-SemiBold.ttf';
import KanitExtraBold from './assets/fonts/Kanit-ExtraBold.ttf';
import CabinBold from './assets/fonts/Cabin-Bold.ttf';
import CabinSemiBold from './assets/fonts/Cabin-SemiBold.ttf';
import CabinMedium from './assets/fonts/Cabin-Medium.ttf';
import Cabin from './assets/fonts/Cabin-Regular.ttf';

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
    font-family: "Kanit";
    src: url(${KanitRegular});
  }

  @font-face{
    font-family: "Kanit Light";
    src: url(${KanitLight});
  }

  @font-face{
    font-family: "Kanit Bold";
    src: url(${KanitBold});
  }

  @font-face{
    font-family: "Kanit EXtraBold";
    src: url(${KanitExtraBold});
  }

  @font-face{
    font-family: "Kanit SemiBold";
    src: url(${KanitSemiBold});
  }

  @font-face{
    font-family: "Cabin Bold";
    src: url(${CabinBold});
  }

  @font-face{
    font-family: "Cabin SemiBold";
    src: url(${CabinSemiBold});
  }

  @font-face{
    font-family: "Cabin Medium";
    src: url(${CabinMedium});
  }

  @font-face{
    font-family: "Cabin";
    src: url(${Cabin});
  }

  a{
    text-decoration: none;
  }
`;

function App() {

  const [isOpen, setState] = useState(false);

  return (
    <main id="nexthouse-grand-wrapper">
      <Router>
         <GlobalStyle />

         <Switch>
           <Route path="/" exact>
             <>
                <CSSTransition
                  in={isOpen}
                  timeout={300}
                  classNames="menu-anime"
                  unmountOnExit
                >
                   <Menu />
                </CSSTransition>

                 <Navbar isOpen={isOpen} onClick={() => setState(state => !state ? true : false)} />

                 <Hero />

                 <Carrousel />

                 <SectionTwo />
              </>
           </Route>

           <Route path="/project-zenata">
             <>
               <CSSTransition
                 in={isOpen}
                 timeout={300}
                 classNames="menu-anime"
                 unmountOnExit
               >
                  <Menu />
               </CSSTransition>

               <Navbar isOpen={isOpen} onClick={() => setState(state => !state ? true : false)} />
               <PageProject />
             </>
           </Route>
         </Switch>
      </Router>
    </main>
  );
}

export default App;
