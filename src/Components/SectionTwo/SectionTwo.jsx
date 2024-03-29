import React, {useEffect} from 'react';
import styled from 'styled-components';
import * as ol from 'ol';
import 'ol/ol.css';
import TileLayer from 'ol/layer/Tile';
import * as olProj from 'ol/proj';
import OSM from 'ol/source/OSM';

import Villa from '../../assets/img/image-villa.jpg';
import Appart from '../../assets/img/image-appart.jpg';
import Arrow from '../../assets/img/arrow-orange.svg';
import ArrowLeft from '../../assets/img/arrow-left.svg';
import ArrowRight from '../../assets/img/arrow-right.svg';
import Presse1 from '../../assets/img/360.png';
import Presse2 from '../../assets/img/matin.png';
import Presse3 from '../../assets/img/pluriel.png';
import Pattern from '../../assets/img/pattern-nexthouse.svg';
import Logo from '../../assets/img/logo-nexthouse.svg';
import Facebook from '../../assets/img/logo-facebook-color.svg';
import Youtube from '../../assets/img/logo-youtube-color.svg';
import Instagram from '../../assets/img/logo-instagram-color.svg';


const StyledWrapper = styled.div`
  background: #F6FBFB;
  padding: 160px 0;

  .header{
    h2{
      color: #102F2C;
      font-family: 'Kanit Light';
      font-size: 40px;
      font-weight: 300;
      line-height: 60px;
      text-align: center;

      @media (max-width: 607px){
        font-size: 28px;
      }
    }

    h1{
      color: #102F2C;
      font-family: 'Kanit ExtraBold';
      font-size: 46px;
      font-weight: 800;
      line-height: 55px;
      text-align: center;
      padding: 0 625px;
      margin-top: 23px;
      margin-bottom: 73px;

      @media (max-width: 1578px){
        padding: 0 568px;
      }

      @media (max-width: 1439px){
        padding: 0;
      }

      @media (max-width: 607px){
        font-size: 32px;
      }
    }
  }

  .img{
    width: 100%;

    @media (max-width: 1318px){
      width: auto;
    }

    @media (max-width: 781px){
      width: 100%;
    }

    @media (max-width: 607px) {
      max-width: 373px;
    }
  }
`;

const StyledColsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 102px;
  max-height: 1600px;

  @media (max-width: 1318px){
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 492px){
    padding: 0 20px;
  }

  a{
    cursor: pointer;
    display: block;
    transition: .5s;

    &:hover .img{
      box-shadow: 0px 8px 20px #bdbdbd;
    }
  }

  img{
    transition: .5s;
  }

  .coll{
    margin-right: 30px;
    mergin-left: 30px;

    @media (max-width: 492px){
      margin-right: 0px;
    }
  }

  .coll:last-of-type{
    @media (max-width: 1318px) {
      position: relative;
      top: -196px;
    }
  }

  .col{
    margin-top: 84px;

    @media (max-width: 492px){
      margin-top: 0px;
    }
  }

  .content{
    position: relative;
    top: -194px;

    h4{
      color: #E6D399;
      font-family: 'Kanit';
      font-size: 40px;
      line-height: 60px;
      text-shadow: 0 0 20px 0 rgba(36,56,66,0.5);

      @media (max-width: 703px){
        font-size: 31px;
      }

      @media (max-width: 607px) {
        font-size: 28px;
      }
    }

    h1{
      color: #FFFFFF;
      font-family: 'Kanit ExtraBold';
      font-size: 38px;
      font-weight: 800;
      line-height: 40px;
      text-shadow: 0 0 5px 0 rgba(16,47,44,0.2);

      @media (max-width: 607px) {
        font-size: 24px;
      }
    }

    span{
      float: right;
      padding: 32px;
      background: #ffffff;
      position: relative;
      top: -57px;

      @media (max-width: 607px) {
        top: -18px;
      }
    }

    .text{
      padding-left: 161px;
      padding-top: 24px;

      @media (max-width: 1439px){
        padding-left: 76px;
      }

      @media (max-width: 492px){
        padding-left: 23px;
      }

      @media (max-width: 607px) {
        padding-top: 0px;
      }
    }
  }
`;

const StyledPresseWrapper = styled.div`
  text-align: center;

  h1.title{
    color: #243842;
    font-family: 'Kanit Bold';
    font-size: 40px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
  }

  .cols-wrapper{
    display: flex;
    justify-content: center;
    padding: 70px 152px;

    @media (max-width: 1382px) {
      padding: 70px 2px;
    }

    @media (max-width: 1206px) {
      flex-direction: column;
      padding: 70px 333px;
    }

    @media (max-width: 1103px) {
      padding: 70px 290px;
    }

    @media (max-width: 986px) {
      padding: 70px 229px;
    }

    @media (max-width: 864px) {
      padding: 70px 177px;
    }

    @media (max-width: 791px) {
      padding: 70px 77px;
    }

    @media (max-width: 791px) {
      padding: 70px 7px;
    }

    .col-2{
      img.logo{
        margin-bottom: 108px !important;
        margin-top: 27px;
      }
    }

    .col-3{
      img.logo{
        margin-top: 14px !important;
        margin-bottom: 97px;
      }
    }

    .col-3{
      .arrow{
        bottom: -53px !important;
      }
    }

    .col{
      box-shadow: 0px 4px 10px #b5b5b524;
      padding: 96px 49px;
      background: #ffffff;
      text-align: center;
      margin: 0 22px;
      cursor: pointer;
      transition: .5s;

      @media (max-width: 1206px) {
        margin-bottom: 20px;
      }

      &:hover{
        box-shadow: 0px 4px 10px #b5b5b55c;
        background: #cc9d3a26;
      }

      .arrow{
        position: relative;
        bottom: -99px;
        float: right;
        width: 18px;
        right: -21px;

        @media (max-width: 1206px) {
          bottom: -50px;
        }
      }

      h1{
        color: #243842;
        font-family: 'Kanit Medium';
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        margin-top: 20px;
      }

      img.logo{
        margin-bottom: 88px;
      }

      .divider{
        width: 80px;
        height: 6px;
        background: #243842;
      }
    }
  }

  .bottom{
    color: #102F2C;
    font-family: 'Kanit Medium';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: right;

    @media (max-width: 375px) {
      font-size: 12px;
    }

    img{
      vertical-align: middle;
      margin-left: 60px;
    }
  }
`;

const StyledBottom = styled.div`
  padding: 150px 20px;
  text-align: center;
  padding-bottom: 0;

  .divider{
    height: 6px;
    width: 500px;
    background-color: #C9982E;
    margin: auto;

    @media (max-width: 713px){
      width: 384px;
    }

    @media (max-width: 375px) {
      width: 246px;
    }
  }

  img.pattern{
    position: absolute;
    left: 0;

    @media (max-width: 1069px){
      display: none;
    }
  }

  .content{
    margin: 80px 0;

    @media (max-width: 1238px){
      padding: 0 216px;
    }

    @media (max-width: 1069px){
      padding: 0 58px;
    }

    h1{
      color: #243842;
      font-family: 'Kanit ExtraBold';
      font-size: 45px;
      font-weight: 800;
      line-height: 68px;
      text-align: center;

      @media (max-width: 375px) {
        font-size: 29px;
      }
    }

    p{
      color: #102F2C;
      font-family: 'Cabin Medium';
      font-size: 26px;
      font-weight: 500;
      line-height: 39px;
      text-align: center;
      margin-bottom: 60px;
    }

    a{
      color: #102F2C;
      font-family: 'Kanit SemiBold';
      font-size: 13px;
      font-weight: 600;
      line-height: 19px;
      padding: 15px 25px 15px 19px;
      background-color: #ECD493;
      cursor: pointer;

      @media (max-width: 375px) {
        font-size: 9px;
      }

      img{
        vertical-align: middle;
        margin-left: 45px;

        @media (max-width: 375px) {
            margin-left: 8px;
        }
      }
    }
  }
`;

const StyledMap = styled.div`
  background: #E7F3F2;
  height: 650px;
  width: 100%;
`;

const StyledFooter = styled.div`
  width: 100%;
  height: 454px;
  background: #14262f;
  padding: 39px 11px;

  @media (max-width: 923px){
    padding: 49px 41px;
    height: auto;
  }

  .header-logo{
    margin: auto;
    text-align: center;
  }

  .header{
    padding: 20px 0;
    border-bottom: 1px solid #979797;
    padding-bottom: 46px;

    img{
      margin-bottom: 40px;
    }

    .menu-1{
      display: flex;
      justify-content: center;
      margin: 50px 0;
      flex-wrap: wrap;

      a{
        opacity: 0.8;
        color: #FFFFFF;
        font-family: 'Kanit Medium';
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        margin: 0 58px;
        text-transform: uppercase;
      }
    }

    .menu-2{
      p{
        opacity: 0.8;
        color: #FFFFFF;
        font-family: Kanit;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        text-align: center;
      }
    }
  }

  .footer{
    display: flex;
    justify-content: center;
    padding: 28px;
    align-items: center;

    a{
      margin: 0 20px;
      cursor: pointer;
    }
  }
`;

const SectionTwo = () => {

  useEffect(() => {
    /*let map = new ol.Map({
        target: 'myMap',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new ol.View({
          center: olProj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
    });*/
  });

  return (
    <>
    <StyledWrapper>
       <div className="header">
         <h2>Appartement ou Villa</h2>
         <h1>À chacun son style de vie</h1>
       </div>
       <StyledColsWrapper>
          <div className="col coll">
            <a>
              <img className="img" src={Appart} alt='Appartement' />
              <div className="content">
                <div className="text">
                  <h4>Appartements</h4>
                  <h1>Trouvez le bien qui <br/> vous correspond</h1>
                </div>
                <span>
                  <img src={Arrow} />
                </span>
              </div>
            </a>
          </div>
          <div className="coll">
            <a>
              <img className="img" src={Villa} alt='Villa' />
              <div className="content">
                <div className="text">
                  <h4>Villa</h4>
                  <h1>Vivez tel que vous <br/> l’avez rêvé…</h1>
                </div>
                <span>
                  <img src={Arrow} />
                </span>
              </div>
            </a>
          </div>
       </StyledColsWrapper>

       <StyledPresseWrapper>
         <h1 className="title">La presse parle <br /> de nous</h1>

         <div className="cols-wrapper">
           <a className="col col-1">
              <img className="logo" src={Presse1} />
              <div className="divider"></div>
              <h1>ZENATA: L’ECO-CITÉ <br /> DÉVOILE SON OFFRE <br />RÉSIDENTIELLE</h1>
              <img src={Arrow} className="arrow" />
           </a>
           <a className="col col-2">
              <img className="logo" src={Presse2} />
              <div className="divider"></div>
              <h1>Eco-cité Zenata : Les <br />premières unités <br />résidentielles en vente</h1>
              <img src={Arrow} className="arrow" />
           </a>
           <a className="col col-3">
              <img className="logo" src={Presse3} />
              <div className="divider"></div>
              <h1>Al Akaria<br /> Développement signe <br />avec la Société <br />d’Aménagement de <br />Zenata</h1>
              <img src={Arrow} className="arrow" />
           </a>
         </div>
         <a className="bottom">
           <span>Parcourez tous les articles de presse</span>
           <img src={ArrowRight} />
         </a>
       </StyledPresseWrapper>

       <StyledBottom>
         <div className="divider"></div>
         <img className="pattern" src={Pattern} alt="pattern" />
         <div className="content">
           <h1>À la recherche de votre futur maison ?</h1>
           <p>NEXT HOUSE répond à tous vos critères haut standing <br />
             pour un confort à votre mesure</p>
           <a>Prenez RDV dans notre Showroom <img src={ArrowRight} /> </a>
         </div>
       </StyledBottom>
    </StyledWrapper>

    <StyledMap id="myMap" />

    <StyledFooter>
      <div className="header">
         <div className="header-logo">
           <img src={Logo} alt="logo" />
         </div>
         <div className="menu-1">
           <a>NEXTHOUSE</a>
           <a>projets</a>
           <a>revue de presse</a>
           <a>contact</a>
         </div>
         <div className="menu-2">
           <p>
             2019.
             |  AL AKARIA DEVELOPPEMENT • NEXT HOUSE
             |  Tous droits réservés  |  mentions légales
             |  réalisé par innoveos
           </p>
         </div>
      </div>
      <div className="footer">
        <a><img src={Facebook} alt="Facebook" /></a>
        <a><img src={Instagram} alt="Instagram" /></a>
        <a><img src={Youtube} alt="Youtube" /></a>
      </div>
    </StyledFooter>
    </>
  );
};

export default SectionTwo;
