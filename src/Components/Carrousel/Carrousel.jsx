import React from 'react';
import styled from 'styled-components';
import ReactSwipe from 'react-swipe';

import Bg from '../../assets/img/slider-1.jpg';
import Casaanfa from '../../assets/img/logo-nexthouse-casa-anfa.svg';
import Dar from '../../assets/img/logo-nexthouse-darbouazza.svg';
import Zenata from '../../assets/img/logo-nexthouse-zenata.svg';
import SecurityIcon from '../../assets/img/icone-securite.svg';
import IconPool from '../../assets/img/icone-piscine.svg';
import IconKids from '../../assets/img/icone-kids-club.svg';
import IconSea from '../../assets/img/icone-mer.svg';
import ArrowRight from '../../assets/img/arrow-right.svg';
import ArrowLeft from '../../assets/img/arrow-left.svg';

const CarrouselWrapper = styled.div`
  width: 100%;
  margin-top: -198px;
  padding: 0 362px;

  h1.title{
    color: #102F2C;
    font-family: 'Kanit Bold';
    font-size: 46px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
    padding: 0 279px;

    @media (max-width: 1459px) {
      padding: 0;
      margin-bottom: 60px;
    }
  }
`;

const SliderThumbs = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  span{
    padding: 56px 41px;
    border-bottom: 5px solid #FAF5EA;
    cursor: pointer;

    @media (max-width: 1496px) {
      padding: 0;
    }
  }
`;

const Slider = styled.div`
  img.bg{
    width: 100%;
  }

  .content{
    padding: 20px 150px;
    position: relative;
    top: -269px;

    @media (max-width: 1666px) {
      padding: 0;
    }

    h1{
      color: #FFFFFF;
      font-family: 'Kanit ExtraBold';
      font-size: 60px;
      font-weight: 800;
      line-height: 46px;
      text-align: center;
      margin-bottom: 16px;
    }

    h3{
      	color: #FFFFFF;
        font-family: 'Kanit SemiBold';
        font-size: 40px;
        font-weight: 600;
        line-height: 46px;
        text-align: center;
        margin-bottom: 20px;
    }

    p{
      color: #ffffff;
      font-size: 25px;
      font-family: 'Kanit Bold';
      text-align: center;
      text-align: center;
      padding: 0 141px;

      span{
        color: #F1DB9E;
        font-family: 'Kanit ExtraBold';
        font-size: 25px;
        font-weight: 800;
        line-height: 29px;
      }
    }
  }

  .footer{
    display: flex;
    justify-content: center;
    background: #ECD493;
    align-items: center;
    position: relative;
    top: -248px;

    div{
      display: flex;
      padding: 48px 45px;
      align-items: center;

      p{
        color: #243842;
        font-family: 'Cabin SemiBold';
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        margin-left: 12px;
      }
    }
  }
`;

const StyledArrows = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 100;

  div{
    padding: 30px;
    background: #ffffff;
    cursor: pointer;
    transition: .3s;
  }

  div:first-child{
    position: relative;
    left: -40px;
    top: 263px;

    @media (max-width: 1640px) {
      left: 0;
      top: 0;
    }

    &:hover{
      box-shadow: -4px 0px 4px #efefefa6;
    }
  }

  div:last-child{
    position: relative;
    right: -824px;
    top: 263px;

    @media (max-width: 1640px) {
      left: 0;
      top: 0;
    }

    &:hover{
      box-shadow: 4px 0px 4px #efefefa6;
    }
  }
`;


const StyledNavs = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -200px;

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
`;

const Carrousel = () => {
  let reactSwipeEl;

  return (
    <CarrouselWrapper>
      <h1 className="title">Investir dans l’immobilier neuf</h1>

      <div>
        <SliderThumbs>
          <span>
            <img src={Casaanfa} alt="Casaanfa project" />
          </span>
          <span>
            <img src={Zenata} alt="Zenata project" />
          </span>
          <span>
            <img src={Dar} alt="Dar project" />
          </span>
        </SliderThumbs>
        <StyledArrows>
          <div onClick={() => reactSwipeEl.prev()}>
            <img src={ArrowLeft} alt="arrow left" />
          </div>
          <div onClick={() => reactSwipeEl.next()}>
            <img src={ArrowRight} alt="arrow right" />
          </div>
        </StyledArrows>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          <Slider>
             <div className="header">
               <img className="bg" src={Bg} alt="Dar project" />
               <div className="content">
                 <h1>
                   NEXT HOUSE
                 </h1>
                 <h3>Zenata Eco-City</h3>
                 <p>Appartements de 45 à 260 m2
                   à partir de <span>10 500 DH/M2</span></p>
               </div>
             </div>
             <div className="footer">
               <div>
                 <img src={SecurityIcon} alt="securite icon" />
                 <p>
                 Fermée <br />
                 Sécurisée
                 </p>
               </div>
               <div>
                 <img src={IconPool} alt="pool icon" />
                 <p>
                 Piscine
                 </p>
               </div>
               <div>
                 <img src={IconKids} alt="kids icon" />
                 <p>
                 Kids club
                 </p>
               </div>
               <div>
                 <img src={IconSea} alt="sea icon" />
                 <p>
                 Proximité <br />
                 de la mer
                 </p>
               </div>
             </div>
          </Slider>
          <div>PANE 2</div>
          <div>PANE 3</div>
        </ReactSwipe>
        <StyledNavs>
          <div onClick={() => {
            reactSwipeEl.slide(0);
          }}></div>
          <div onClick={() => reactSwipeEl.slide(1)} ></div>
          <div onClick={() => reactSwipeEl.slide(2)} ></div>
        </StyledNavs>
      </div>
    </CarrouselWrapper>
  );
};

export default Carrousel;
