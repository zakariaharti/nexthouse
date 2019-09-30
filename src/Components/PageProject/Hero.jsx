import React from 'react';
import styled from 'styled-components';

import Arrow from '../../assets/img/fleche.svg';
import Bg from '../../assets/img/visuel-slide.jpg';
import Motif from '../../assets/img/motif-nexthouse.svg';
import SecurityIcon from '../../assets/img/icone-securite.svg';
import IconPool from '../../assets/img/icone-piscine.svg';
import IconKids from '../../assets/img/icone-kids-club.svg';
import IconSea from '../../assets/img/icone-mer.svg';
import ArrowRight from '../../assets/img/arrow-right.svg';
import ArrowLeft from '../../assets/img/arrow-left.svg';
import Photo from '../../assets/img/photo.jpg';
import Video from '../../assets/img/icone-video.svg';
import Image from '../../assets/img/icone-images.svg';
import Icon3d from '../../assets/img/icone-3d.svg';


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

const StyledArticle= styled.div`
  padding: 175px 347px;

  h1 {
    color: #243842;
    font-family: 'Kanit Bold';
    font-size: 46px;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    margin-bottom: 35px;
  }

  p{
    color: #102F2C;
    font-family: 'Cabin Medium';
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;

    span{
      margin-bottom: 35px;
      display: block;
    }
  }

  img.img{
    position: absolute;
    top: 614px;
    z-index: -2;
    right: 0;
  }

  .footer{
    display: flex;
    justify-content: center;
    margin-top: 30px;

    div.option{
      text-align: center;
      padding: 1px 50px;
    }

    div:not(:last-of-type){
      border-right: 1px dashed #356460;
    }

    p{
      font-family: 'Cabin Bold';
      font-size: 14px;
      font-weight: bold;
      line-height: 18px;
      text-align: center;
    }
  }
`;

const StyledSlider = styled.div`
  background-color: #EBF5F4;
  padding: 70px 152px;

  p{
    color: #102F2C;
    font-family: 'Kanit Light';
    font-size: 25px;
    font-weight: 300;
    line-height: 38px;
    text-align: center;
    margin-bottom: 20px;
  }

  h1{
    color: #102F2C;
    font-family: 'Kanit ExtraBold';
    font-size: 46px;
    font-weight: 800;
    line-height: 50px;
    text-align: center;
  }

  .navs{
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 30px;

    span:last-of-type, span:nth-child(2){
      background-color: #ffffff;

      p{
        color: rgba(16, 47, 44, 0.19);
      }
    }
    span{
      text-align: center;
      display: block;
      text-align: center;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #F1DB9E;
      cursor: pointer;
      padding: 36px 62px;
      margin: 34px;

      p{
        color: #102F2C;
        font-family: 'Kanit Bold';
        font-size: 15px;
        font-weight: bold;
        line-height: 23px;
        text-align: center;
        margin: 0;
        margin-top: 10px;
      }

      img{
        display: block;
      }
    }
  }

  .slider{
    img {
      width: 100%;
      position: relative;
    }

    div.arrows{
      top: -461px;
      display: flex;
      justify-content: space-between;
      position: relative;

      span{
        padding: 32px;
        background: #ffffff;
        cursor: pointer;
        position: relative;
      }

      span:first-child{
        left: -40px;
      }

      span:last-child{
        right: -40px;
      }
    }
  }
`;

const StyledNavs = styled.div`
  display: flex;
  justify-content: center;

  div{
    width: 40px;
    height: 4px;
    background: #E7E9E9;
    margin: 0 10px;
    cursor: pointer;
    transition: .3s;

    &:hover{
      background: gray;
    }
  }

  div.active{
    background: gray;
  }
`;

const Hero = () => {
  return (
   <>
    <StyledWrapper>
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
             
           </div>
          </div>
        </StyledContent>
    </StyledWrapper>
    <StyledArticle>
      <img className="img" src={Motif} alt="next house motif" />

      <h1>
      Des appartements pour <br />
      tous les styles de vie
      </h1>
      <p>
        <span>Les appartements de la résidence NEXT HOUSE ZENATA
        ECO CITY disposent de beaux volumes et d’espaces
        de vie lumineux et parfaitement agencés.</span> <br />
        <span>Des matériaux nobles et des équipements de qualité
        rigoureusement sélectionnés embelissent ces appartements
        chics et fonctionnels.</span>
      </p>

      <div className="footer">
        <div className="option">
          <img src={SecurityIcon} alt="securite icon" />
          <p>
          Fermée -
          Sécurisée
          </p>
        </div>
        <div className="option">
          <img src={IconPool} alt="pool icon" />
          <p>
          Piscine
          </p>
        </div>
        <div className="option">
          <img src={IconKids} alt="kids icon" />
          <p>
          Kids club
          </p>
        </div>
        <div className="option">
          <img src={IconSea} alt="sea icon" />
          <p>
          Proximité -
          de la mer
          </p>
        </div>
      </div>
    </StyledArticle>
    <StyledSlider>
      <p>Un cadre de vie calme et derdoyant</p>
      <h1>Votre rédidence en détail</h1>

      <div className="navs">
        <span>
          <img src={Image} alt="Image icon" />
          <p>Photos</p>
        </span>
        <span>
          <img src={Video} alt="video icon" />
          <p>Video</p>
        </span>
        <span>
          <img src={Icon3d} alt="Icon3d icon" />
          <p>Plan 3d</p>
        </span>
      </div>

      <div className="slider">
        <img src={Photo} alt="bg photo" />

        <div className="arrows">
          <span><img src={ArrowLeft} alt="arrow left" /></span>
          <span><img src={ArrowRight} alt="arrow right" /></span>
        </div>

        <StyledNavs>
          <div></div>
          <div className="active"></div>
          <div></div>
        </StyledNavs>
      </div>
    </StyledSlider>
    </>
  );
};

export default Hero;
