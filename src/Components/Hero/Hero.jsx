import React from 'react';
import styled from 'styled-components';

import Arrow from '../../assets/img/fleche.svg';
import Bg from '../../assets/img/visuel-slide.jpg';
import SearchIcon from '../../assets/img/icone-recherche.svg';
import Casaanfa from '../../assets/img/logo-nexthouse-casa-anfa.svg';
import Dar from '../../assets/img/logo-nexthouse-darbouazza.svg';
import Zenata from '../../assets/img/logo-nexthouse-zenata.svg';
import ArrowRight from '../../assets/img/fleche-droite.svg';
import HeroArticle from '../../assets/img/hero-article.jpg';
import Motif from '../../assets/img/motif-nexthouse.svg';
import ArrowButton from '../../assets/img/icons8-right-arrow-30.png';


const StyledWrapper = styled.div`
  width: 100%;
  height: 800px;
  padding: 50px;
  background-image: url(${Bg});
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 375px) {
    padding: 0;
  }

  @media (max-width: 852px){
    flex-direction: column;
    align-items: center;
  }
`;

const StyledControllers = styled.div`
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 852px) {
    flex-direction: row;
    margin: 0 30px;
  }

  @media (max-width: 800px) {
    display: none;
  }

  p{
    font-size: 30px;
    font-family: 'Kanit Medium';
    color: #ffffff;
  }

  span{
    width: 3px;
    background-color: #FFFFFF;
    display: block;
    margin: 10px 0;
  }

  span.bar-1{
    height: 405px;

    @media (max-width: 852px) {
      width: 396px;
      height: 4px;
    }
  }

  span.bar-2{
    height: 40px;

    @media (max-width: 852px) {
      width: 200px;
      height: 5px;
    }
  }
`;

const StyledContent = styled.div`
  margin-top: 341px;
  margin-left: 126px;

  @media (max-width: 626px) {
    align-self: flex-start;
  }

  @media (max-width: 1645px) {
    margin-top: 287px;
  }

  @media (max-width: 1352px) {
    margin-top: 228px;
  }

  @media (max-width: 1309px) {
    margin-left: 25px;
  }

  @media (max-width: 852px) {
    margin-top: 72px;
  }

  h1.title{
    color: #FFFFFF;
    font-family: 'Kanit SemiBold';
    font-size: 70px;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 60px;
    text-shadow: 5px 6px 10px 0 rgba(36,56,66,0.3);

    @media (max-width: 696px){
      font-size: 65px;
    }

    @media (max-width: 492px) {
      font-size: 50px;
    }

    @media (max-width: 375px) {
      font-size: 39px;
    }
  }

  .p-title{
    color: #FFFFFF;
    font-family: 'Kanit SemiBold';
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 60px;

    @media (max-width: 696px){
      font-size: 26px;
    }

    @media (max-width: 492px) {
      font-size: 25px;
    }

    @media (max-width: 375px) {
      font-size: 23px;
    }
  }

  .upper{
    background-color: #ECD493;
    padding: 10px 31px 10px 19px;

    @media (max-width: 492px) {
      padding: 0px 31px 1px 19px;
    }

    p{
      color: #243842;
      font-family: 'Kanit Medium';
      font-size: 30px;
      font-weight: 500;
      line-height: 45px;
      margin-bottom: -15px;

      @media (max-width: 696px){
        font-size: 26px;
      }

      @media (max-width: 492px) {
        font-size: 20px;
      }

      @media (max-width: 375px) {
        font-size: 17px;
      }
    }

    h1{
      color: #243842;
      font-family: 'Kanit SemiBold';
      font-size: 60px;
      font-weight: 600;
      line-height: 90px;

      @media (max-width: 696px){
        font-size: 55px;
      }

      @media (max-width: 492px) {
        font-size: 42px;
      }

      @media (max-width: 375px) {
        font-size: 35px;
      }

      span{
        color: #243842;
        font-family: 'Kanit Medium';
        font-size: 30px;
        font-weight: 500;
        line-height: 45px;

        @media (max-width: 696px){
          font-size: 24px;
        }

        @media (max-width: 375px) {
          font-size: 20px;
        }
      }
    }
  }

  .lower{
    p{
      color: #FAF6EB;
      font-family: 'Kanit Medium';
      font-size: 30px;
      font-weight: 500;
      line-height: 45px;
      padding: 17px 31px 15px 19px;
      background-color: #243742;

      @media (max-width: 696px){
        font-size: 27px;
      }

      @media (max-width: 492px) {
        font-size: 24px;
      }

      @media (max-width: 375px) {
        font-size: 22px;
      }
    }

    a{
      float: right;
      background: #C9982E;
      padding: 25px;
      position: relative;
      right: -75px;
      top: -76px;
      display: block;
      cursor: pointer;
      transition: all .3s;
      opacity: .8;

      &:hover{
        opacity: 1;
      }

      @media (max-width: 375px) {
        padding: 18px;
        right: 0px;
        top: -1px;
      }
    }
  }

  .container{
    height: 120px;
    width: 453px;

    @media (max-width: 696px){
      width: 411px;
    }

    @media (max-width: 492px) {
      width: 318px;
    }
  }
`;

const SearchWrapper = styled.div`
  margin: 0 263px;
  background: #ffffff;
  display: flex;
  padding: 11px;
  align-items: baseline;
  margin-left: 209px;
  position: relative;
  top: -72px;
  z-index: 999;
  min-width: 529px;

  @media (max-width: 1685px){
    margin-right: 300px;
  }

  @media (max-width: 1645px) {
    margin-right: 373px;
    flex-direction: column;
    align-items: end;
    top: -126px;
  }

  @media (max-width: 1385px) {
    margin-right: 450px;
  }

  @media (max-width: 1352px) {
    top: -185px;
  }

  @media (max-width: 852px) {
    top: -296px;
    margin-left: 203px;
  }

  @media (max-width: 818px){
    margin: 0 20px;
  }

  @media (max-width: 492px) {
    min-width: 0;
    top: -338px;
  }

  p{
    color: #102F2C;
    font-family: 'Kanit Bold';
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    padding: 46px;

    @media (max-width: 1385px) {
      padding: 0 15px;
    }

    @media (max-width: 1666px){
      padding: 37px;
    }

    @media (max-width: 1645px) {
      padding: 16px;
    }
  }

  select{
    color: #677A79;
    font-family: 'Cabin Bold';
    font-size: 15px;
    font-weight: bold;
    line-height: 18px;
    background: #ffffff;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    padding: 21px 131px 19px 0px;
    margin: 0 46px;

    @media (max-width: 1645px) {
      margin: 0 26px;
    }

    @media (max-width: 1385px) {
      margin: 0 15px;
    }

    @media (max-width: 492px) {
      display: block;
    }
  }


  button{
    position: relative;
    right: -63px;
    padding: 40px 80px;
    border: navajowhite;
    background: #ECD493;
    cursor: pointer;
    transition: all .3s;
    opacity: .7;

    @media (max-width: 1685px){
      right: -21px;
    }

    @media (max-width: 1666px){
      right: 0;
      padding: 31px 77px;
    }

    @media (max-width: 1645px) {
      right: -51px;
    }

    @media (max-width: 1385px) {
      right: -17px;
    }

    @media (max-width: 1352px) {
      margin-top: 14px;
    }

    @media (max-width: 492px) {
      display: block;
    }

    &:hover{
      opacity: 1;
    }
  }
`;

const NavsWrapper = styled.div`
  margin-left: 92px;
  display: flex;
  margin-top: 2px;
  position: relative;
  top: -142px;
  z-index: 99;

  @media (max-width: 1308px){
    justify-content: center;
    margin-left: 0;
    top: -309px;
  }

  @media (max-width: 1645px){
    top: -166px;
  }

  @media (max-width: 1645px){
    top: -179px;
  }

  @media (max-width: 1352px) {
    top: -248px;
  }

  @media (max-width: 1038px) {
    flex-direction: column;
  }

  @media (max-width: 818px) {
    top: -186px;
  }


  a{
    padding: 110px 50px 50px 109px;
    background-color: #1F4340;
    margin-right: 2px;
    cursor: pointer;
    transition: .3s;
    opacity: .9;

    @media (max-width: 1308px) {
      text-align: center;
      margin-bottom: 10px;
      margin-left: 20px;
      margin-right: 20px;
    }

    @media (max-width: 1645px) {
      padding: 122px 40px 46px 100px;
    }

    @media (max-width: 1308px) {
      padding: 81px 13px 42px 63px;
    }

    &:hover{
      opacity: 1;
    }

    img.arrow{
      position: relative;
      bottom: -31px;

      @media (max-width: 1308px) {
        bottom: -65px;
        float: right;
      }
    }
  }
`;

const StyledArticle = styled.div`
  padding: 150px 152px;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -362px;
  background: #F6FBFB;

  @media (max-width: 1452px){
    padding: 150px 79px;
    padding-bottom: 0;
  }

  @media (max-width: 1213px) {
    padding-bottom: 256px;
  }

  @media (max-width: 1213px){
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 670px) {
    padding: 150px 35px;
  }

  @media (max-width: 492px) {
    padding-bottom: 354px;
  }

  @media (max-width: 375px) {
    padding-bottom: 440px;
  }

  .col{
    padding: 0 50px;
    position: relative;
    bottom: -192px;
    max-height: 600px;

    @media (max-width: 717px){
      max-height: 457px;
    }
  }

  .col-1{
    padding-right: 145px;

    @media (max-width: 1213px){
      order: 2;
    }

    @media (max-width: 1331px){
      padding-right: 23px;
    }

    h1{
      color: #C9982E;
      font-family: 'Kanit Bold';
      font-size: 48px;
      font-weight: bold;
      line-height: 72px;

      @media (max-width: 375px) {
        font-size: 38px;
      }
    }

    h3{
      color: #102F2C;
      font-family: 'Kanit SemiBold';
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin-top: 10px;
      margin-bottom: 30px;

      @media (max-width: 375px) {
        font-size: 18px;
      }
    }

    p{
      color: #102F2C;
      font-family: 'Cabin';
      font-size: 20px;
      line-height: 28px;
      text-align: justify;
      margin-bottom: 60px;

      @media (max-width: 375px) {
        font-size: 20px;
      }
    }

    a{
      color: #102F2C;
      font-family: 'Kanit SemiBold';
      font-size: 13px;
      font-weight: 600;
      line-height: 19px;
      background: #ECD493;
      padding: 16px 22px 16px 19px;
      cursor: pointer;
      transition: .3s;
      opacity: .7;

      @media (max-width: 375px) {
        font-size: 9px;
      }

      &:hover{
        opacity: 1;
      }

      img{
        width: 20px;
        height: 20px;
        vertical-align: bottom;
        margin-left: 61px;
      }
    }
  }

  .col-2{

    @media (max-width: 1213px){
      order: 1;
    }

    img:first-child{
      z-index: 1000;
      position: relative;

      @media (max-width: 717px) {
         width: 100%;
      }
    }

    img:last-child{
      position: relative;
      top: -330px;
      left: 130px;

      @media (max-width: 781px) {
        top: -340px;
        left: 88px;
      }

      @media (max-width: 717px) {
         width: 418px;
         top: -307px;
         left: 60px;
      }

      @media (max-width: 492px) {
        width: 294px;
        top: -197px;
        left: 43px;
      }

      @media (max-width: 375px) {
        width: 199px;
      }
    }
  }
`;

const Hero = () => {
  return (
   <>
    <StyledWrapper>
       <StyledControllers>
         <p>01</p>
         <span className="bar-1"></span>
         <p>02</p>
         <span className="bar-2"></span>
         <p>03</p>
       </StyledControllers>
       <StyledContent>
         <h1 className="title">NEXT HOUSE</h1>
         <p className="p-title">ZENATA ECO-CITY</p>
         <div className="container">
           <div className="upper">
             <p>A partir de</p>
             <h1>1 300 000 <span>DHS</span></h1>
           </div>
           <div className="lower">
             <p>Livraison courant 2022</p>
             <a>
               <img src={Arrow} alt="arrow icon" />
             </a>
           </div>
          </div>
        </StyledContent>
    </StyledWrapper>
    <SearchWrapper>
      <p>Trouvez votre logement</p>
      <form>
         <select>
           <option>Type de bien</option>
         </select>
         <select>
           <option>Ville</option>
         </select>

         <button>
           <img src={SearchIcon} alt="search icon" />
         </button>
      </form>
    </SearchWrapper>
    <NavsWrapper>
      <a>
        <img src={Casaanfa} alt="casa anfa" />
        <img className="arrow" src={ArrowRight} alt="arrow right icon" />
      </a>
      <a>
        <img src={Zenata} alt="casa anfa" />
        <img className="arrow" src={ArrowRight} alt="arrow right icon" />
      </a>
      <a>
        <img src={Dar} alt="casa anfa" />
        <img className="arrow" src={ArrowRight} alt="arrow right icon" />
      </a>
    </NavsWrapper>
    <StyledArticle>
      <div className="col col-1">
        <h1>NEXT HOUSE</h1>
        <h3>La signature haut standing du Groupe AL Akkaria Développement</h3>
        <p>NEXT HOUSE est l’aboutissement de plusieurs décennies d’une grande
        expérience dans la construction de logement de prestige,  une marque
        qui s’inscrit dans la réflexion, de répondre à un besoin de qualité
        mais surtout, à se positionner  entant qu’un des grands leader dans la construction
        de logement haut standing au Maroc.</p>
        <a>Découvez notre histoire <img src={ArrowButton} /></a>
      </div>
      <div className="col col-2">
        <img src={HeroArticle} />
        <img src={Motif} />
      </div>
    </StyledArticle>
    </>
  );
};

export default Hero;
