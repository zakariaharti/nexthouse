import React, {useState} from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { Logo } from '../../../StyledComponents';

import "./Menu.scss";

import CloseIcon from '../../../assets/img/icone-fermer.svg';
import ProjectImg1 from '../../../assets/img/photo-projet.jpg';
import ProjectImg2 from '../../../assets/img/photo-projet-2.jpg';
import ProjectImg3 from '../../../assets/img/photo-projet-3.jpg';
import LogoImg from '../../../assets/img/logo-nexthouse.svg';
import Facebook from '../../../assets/img/icons8-facebook-f.svg';
import Instagram from '../../../assets/img/icone-instagram.svg';
import Youtube from '../../../assets/img/icone-youtube.svg';


const StyledLogo = styled.nav`
    background-color: #356360;
    cursor: pointer;
    max-height: 91px;

    float: left;
    margin-left: 300px;

    .logo {
       padding: 10px 49px;
    }

    .logo-bottom-shapes{
      position: relative;
      top: -4px;

      div.boottomer{
        height: 21px;
        background: #356260;
        margin: 0;
        padding: 0;
      }

      div.triangleers{
        display: flex;
        justify-content: space-between;

        div{
          width: 81px;
          height: 20px;
        }

        div:first-child{
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 14px 0 14px 111px;
          border-color: transparent transparent transparent #356260;
          position: relative;
          top: -15px;
        }

        div:last-child{
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 14px 111px 14px 0;
          border-color: transparent #356260 transparent transparent;
          position: relative;
          top: -15px;
        }
      }
    }
`;

const MenuWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background-color: #F6FBFB;
   z-index: 9999;
   transition: all .3s;

   transform: translateY(${props => props.isOpen ? '-1440px' : '0'});

   .divider{
     height: 4px;
     width: 70px;
     background-color: #E6D399;
     /* margin-right: -26px; */
     margin-left: -10px;
     margin-top: 40px;
     margin-bottom: 40px;
   }

   a.menu-link{
     color: #243842;
     font-family: 'Kanit Bold';
     font-size: 34px;
     font-weight: bold;
     line-height: 50px;
     text-transform: uppercase;
     transition: .2s;

     &:hover{
       text-decoration: underline;
     }
   }
`;

const MainCol = styled.div`
   float: left;
   width: 80%;
   padding-left: 300px;
   padding-bottom: 80px;

   .header{
     clear: both;
     height: 172px;

     .close-icon{
       float: left;
       padding-top: 37px;
       cursor: pointer;
       transition: all .2s ease-in-out;

       &:hover{
         transform: scale(1.1);
       }
     }
   }

   .title {
     h1{
       color: #243842;
       font-family: 'Kanit Bold';
       font-size: 34px;
       font-weight: bold;
       line-height: 50px;
       text-transform: uppercase;
     }
   }
`;

const SideCol = styled.div`
   width: 20%;
   height: 100%;
   float: right;
   background-color: rgba(230,211,153,0.2);

   .icons{
      margin-top: 190px;
      margin-bottom: 349px;
      display: flex;
      flex-direction: column;
      align-items: center;

      a{
        margin-bottom: 20px;
      }
   }

   p{
     transform: rotate(90deg);
     color: #102F2C;
     font-family: 'Kanit Medium';
     font-size: 14px;
     font-weight: 500;
     letter-spacing: 4px;
     line-height: 21px;
     display: block;
     height: 100px;
     width: 388px;
     word-break: break-all;
     margin-left: -66px;
   }
`;

const ProjectsWrapper = styled.div`
   margin-right: 41px;

  .projects-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    h1{
      color: #243842;
      font-family: 'Kanit Bold';
      font-size: 34px;
      font-weight: bold;
      line-height: 50px;
      text-transform: uppercase;
    }

    a{
      color: #356460;
      font-family: 'Kanit Medium';
      font-size: 13px;
      font-weight: 500;
      line-height: 19px;
      text-align: right;
      text-decoration: none;
    }
  }

  .projects-content{
    display: flex;
    justify-content: space-between;
  }

  .project{
     transition: all .2s;

     &:hover img{
       transform: scale(1.04);
     }

     &:hover .project-label{
       box-shadow: 5px 10px 104px 0 rgba(29, 63, 62, 0.2);
     }

     img{
       transition: all .3s;
     }

    .project-label{
      height: 100px;
      width: 180px;
      background-color: #FFFFFF;
      box-shadow: 5px 10px 104px 0 rgba(29,63,62,0.13);
      padding-top: 42px;
      padding-left: 20px;
      margin-top: -39px;
      margin-left: -19px;
      transition: all .2s;

      h3{
        color: #243842;
        font-family: 'Kanit ExtraBold';
        font-size: 16px;
        font-weight: 800;
        line-height: 24px;
        text-decoration: none;
        text-transform: uppercase;
        transition: all .2s;
      }

      p{
        color: #243842;
        font-family: 'Kanit Bold';
        font-size: 12px;
        font-weight: bold;
        line-height: 18px;
        transition: all .2s;
      }
    }
  }
`;

const Menu = () =>  {

  const [isOpen, setState] = useState(false);

    return (

      <MenuWrapper isOpen={isOpen}>

        <MainCol>
          <div className="header">
            <div className="close-icon" onClick={() => setState(true)}>
              <img src={CloseIcon} alt="close icon" />
            </div>

            <StyledLogo>
              <div className="logo">
                <img src={LogoImg} alt="next house logo" />
              </div>
              <div className="logo-bottom-shapes">
                <div className="boottomer"></div>
                <div className="triangleers">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </StyledLogo>
          </div>
          <div className="content">
            <div className="title">
              <h1>next house</h1>
            </div>

            <div className="divider"></div>

            <ProjectsWrapper>
              <div className="projects-header">
                <h1>nous projets</h1>
                <a href="#">voir tous les projets</a>
              </div>
              <div className="projects-content">
                 <div className="project">
                   <a href="#">
                     <img src={ProjectImg1} alt="project one image" />

                     <div className="project-label">
                        <h3>next house</h3>
                        <p>Zenata Eco-City</p>
                     </div>
                   </a>
                 </div>
                 <div className="project">
                   <a href="#">
                     <img src={ProjectImg2} alt="project two image" />

                     <div className="project-label">
                        <h3>next house</h3>
                        <p>Casa Anafa</p>
                     </div>
                   </a>
                 </div>
                 <div className="project">
                   <a href="#">
                     <img src={ProjectImg3} alt="project three image" />

                     <div className="project-label">
                        <h3>next house</h3>
                        <p>Dar Bouazza</p>
                     </div>
                   </a>
                 </div>
              </div>
            </ProjectsWrapper>

              <div className="divider"></div>

              <a href="#" className="menu-link">la presse parle de nous</a>

              <div className="divider"></div>

              <a href="#" className="menu-link">contactez-nous</a>
            </div>
        </MainCol>
        <SideCol>
          <div className="icons">
            <a href="#">
              <img src={Facebook} alt='facebook icon' />
            </a>
            <a href="#">
              <img src={Instagram} alt='Instagram icon' />
            </a>
            <a href="#">
              <img src={Youtube} alt='Youtube icon' />
            </a>
          </div>
          <p>BY AL AKKARIA DÉVELOPPEMENT</p>
        </SideCol>
      </MenuWrapper>

    )
};

export default Menu;
