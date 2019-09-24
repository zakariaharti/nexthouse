import React from 'react';
import styled from 'styled-components';

import Logo from '../../../assets/img/logo-nexthouse.svg';
import IconCall from '../../../assets/img/icone-call.svg';

const NextHouseNavbar = styled.div`
  height: 100%;
  padding: 0 152px;
  background-color: #ECD493;
`;

const NextHouseNav = styled.nav`
  display: flex;
  justify-content: space-between;

  .navbar-logo-centered{
    background-color: #356360;
    cursor: pointer;
    max-height: 91px;

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
  }

  .contactus{
    padding: 26px 0;

    a {
	    color: #356460;
	    font-family: "Kanit Medium";
	    font-size: 22px;
	    font-weight: 600;
	    line-height: 33px;
	    text-align: right;
      text-transform: uppercase;
      text-decoration: none;

      img {
        margin-right: 10px;
        vertical-align: top;
      }
    }
  }
`;

const StyledMenuButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
	  color: #356460;
	  font-family: "Kanit Medium";
	  font-size: 25px;
	  font-weight: 500;
	  line-height: 38px;
	  text-align: right;
    text-transform: uppercase;
  }

  .menu-button--icon{
    width: 52px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;

    span {
      width: 100%;
      height: 4px;
      background-color: #356460;
      display: block;
      border-radius: 50px;
    }

    span:not(:first-child){
      margin-top: 10px;
    }

    span:nth-child(2){
      width: 74%;
    }

    span:nth-child(3){
      width: 37%;
    }
  }
`;

const Navbar = () => (
  <NextHouseNavbar>
    <NextHouseNav>
      <StyledMenuButton>
        <div className="menu-button--icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>menu</p>
      </StyledMenuButton>

      <div className="navbar-logo-centered">
        <div className="logo">
          <img src={Logo} alt="next house logo" />
        </div>
        <div className="logo-bottom-shapes">
          <div className="boottomer"></div>
          <div className="triangleers">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="contactus">
        <a href="#">
          <p>
            <img src={IconCall} alt="contact us icon" />
            <span>contactez nous</span>
          </p>
        </a>
      </div>
    </NextHouseNav>
  </NextHouseNavbar>
);

export default Navbar;
