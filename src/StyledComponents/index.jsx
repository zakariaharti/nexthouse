import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import LogoImg from '../assets/img/logo-nexthouse.svg';

const StyledLogo = styled.nav`
    background-color: #356360;
    cursor: pointer;
    max-height: 91px;

    float: ${props => props.isMenu && 'left'};
    margin-left: ${props => props.isMenu && '300px'};

    @media (max-width: 1300px){
      order: 1;
    }

    @media (max-width: 1000px){
      order: 2;
    }

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

export const Logo = () => (
  <StyledLogo>
    <Link to="/">
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
    </Link>
  </StyledLogo>
);
