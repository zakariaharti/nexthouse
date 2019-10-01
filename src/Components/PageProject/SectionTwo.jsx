import React, {useEffect} from 'react';
import styled from 'styled-components';
import * as L from 'leaflet/dist/leaflet';

import Tiret from '../../assets/img/tiret-liste.svg';
import Pattern from '../../assets/img/pattern.svg';
import Visuel from '../../assets/img/visuel.jpg';
import Photo1 from '../../assets/img/photo-1.jpg';
import Photo2 from '../../assets/img/photo-2.jpg';
import Photo3 from '../../assets/img/photo-3.jpg';
import IconPhone from '../../assets/img/icone-phone.svg';
import IconRdv from '../../assets/img/icone-rdv.svg';
import IconDownload from '../../assets/img/icone-telechargement.svg';
import Pattern1 from '../../assets/img/pattern-b1.svg';
import Pattern2 from '../../assets/img/pattern-b2.svg';
import Logo from '../../assets/img/logo-nexthouse.svg';
import Facebook from '../../assets/img/logo-facebook-color.svg';
import Youtube from '../../assets/img/logo-youtube-color.svg';
import Instagram from '../../assets/img/logo-instagram-color.svg';


const StyledWrapper = styled.div`
  display: flex;
  justify-content: centre;
  padding: 104px 153px;

  @media (max-width: 867px){
    padding: 104px 30px;
  }

  @media (max-width: 1488px){
    flex-direction: column;
  }

  @media (max-width: 414px){
    padding: 104px 0px;
  }

  .col{
      margin: 0 35px;
  }

  .col-1{
    img:last-child{
      position: relative;
      top: -120px;
      z-index: -14;
      right: -427px;

      @media (max-width: 1488px){
        top: 55px;
        right: 220px;
      }
    }

    img:first-child{
      @media (max-width: 867px){
        width: 100%;
      }
    }
  }

  .col-2{
    padding: 0 60px;
    padding-left: 0;
    margin-top: 68px;

    @media (max-width: 1488px){
      text-align: center;
    }
  }

  h3{
    color: #243842;
    font-family: 'Kanit Medium';
    font-size: 25px;
    font-weight: 500;
    line-height: 38px;
    text-transform: uppercase;
    margin-bottom: 27px;
  }

  h1{
    color: #102F2C;
    font-family: 'Kanit ExtraBold';
    font-size: 36px;
    font-weight: 800;
    line-height: 40px;
  }

  p.text{
    color: #243842;
    font-family: 'Cabin';
    font-size: 18px;
    line-height: 28px;

    @media (max-width: 1488px){
      text-align: left;
    }
  }

  nav{
    padding: 20px;

    @media (max-width: 1488px){
      text-align: left;
    }

    p{
      	color: #243842;
        font-family: 'Cabin Medium';
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        margin-bottom: 7px;
    }
  }

  .content{
    margin-left: 29px;
    margin-top: 28px;
  }
`;

const StyledGallery = styled.div`
  h1{
    color: #102F2C;
    font-family: 'Kanit ExtraBold';
    font-size: 46px;
    font-weight: 800;
    line-height: 50px;
    text-align: center;
    margin: 50px 0;
  }

  .cols{
    display: flex;
    justify-content: space-between;

    @media (max-width: 508px){
      flex-direction: column;
    }

    .col{
      width: 100%;
      height: 700px;
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;

      div{
        height: 100%;
        width: 100%;
        text-align: CENTER;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.02);
        transition: all .3s;

        &:hover{
          background: rgba(0, 0, 0, 0.31);
        }

        p{
          color: #FFFFFF;
          font-family: 'Kanit Bold';
          font-size: 40px;
          font-weight: bold;
          line-height: 60px;
          text-align: center;
          text-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
        }
      }
    }

    .col-1{
      background-image: url(${Photo1});
    }

    .col-2{
      margin: 0 2px;
      background-image: url(${Photo2});

      @media (max-width: 508px){
        margin: 0;
      }
    }

    .col-3{
      background-image: url(${Photo3});
    }
  }
`;

const StyledBottom = styled.div`
  background-color: #EBF5F4;
  padding: 0px 0px 236px 0px;

  @media (max-width: 867px){
      padding: 158px 16px 252px 16px;
  }

  h1{
    color: #243842;
    font-family: 'Kanit ExtraBold';
    font-size: 40px;
    font-weight: 800;
    line-height: 60px;
    text-align: center;
  }

  p{
    color: #243842;
    font-family: 'Cabin';
    font-size: 26px;
    line-height: 40px;
    text-align: center;
  }

  .navs{
    display: flex;
    justify-content: center;
    margin: 47px 0;

    @media (max-width: 974px) {
      flex-direction: column;
    }

    div:nth-child(2){
      margin-right: 35px;
      margin-left: 35px;
    }

    div{
      text-align: center;
      padding: 44px 91px;
      background: #ffffff;
      transition: .3s;
      cursor: pointer;

      @media (max-width: 974px) {
        margin: 10px 35px;
        flex-direction: column;
      }

      &:hover{
        background-color: #F1DB9E;
      }
    }

    p{
      color: #243842;
      font-family: 'Cabin SemiBold';
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      text-align: center;
      margin-top: 20px;
    }
  }

  .img1{
    position: relative;
    top: 176px;

    @media (max-width: 1059px) {
      left: -123px;
    }

    @media (max-width: 867px){
      display: none;
    }
  }

  .img2{
    position: relative;
    float: right;
    top: -106px;

    @media (max-width: 1059px) {
      top: 0;
    }

    @media (max-width: 867px){
      display: none;
    }
  }
`;

const StyledMap = styled.div`
  background: #E7F3F2;
  padding: 30px 240px;
  text-align: center;
  height: 650px;
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

  const access = 'pk.eyJ1IjoiZ3JpbW1qb3c2IiwiYSI6ImNrMTY4NWVwZzA2OHYzbG1yNGl3Y2R5cnUifQ.PQj-RbQj5Wm_XZA1UgGnHg';

  useEffect(() => {
    let mymap = L.map('myMap').setView([33.589886, -7.603869], 14);

    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${access}`, {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 30,
	    id: 'mapbox.streets',
	    accessToken: `${access}`
    }).addTo(mymap);

    let marker = L.marker([33.589886, -7.603869]).addTo(mymap);

    let circle = L.circle([33.589886, -7.603869], {
	     color: 'red',
	     fillColor: '#f03',
	     fillOpacity: 0.5,
	     radius: 500
    }).addTo(mymap);

    marker.bindPopup(`
       <h1 class="map-title">SIEGE AL AKARIA DEVELOPPEMENT</h1>
       <p class="map-add">Route N° 23 Immeuble 24, Appt 3</p>
       <p class="map-ema">contact@nexthouse.ma</p>
       <p class="map-tel">+212 522 392 828</p>
    `).openPopup();
    circle.bindPopup("I am a circle.");
  });

  return (
   <>
    <StyledWrapper>
       <div className="col col-1">
         <img src={Visuel} alt="visuel" />
         <img src={Pattern} alt="pattern" />
       </div>
       <div className="col col-2">
         <h3>Next house Zenata eco-city</h3>
         <h1>Des appartements conçus pour votre confort</h1>
         <div className="content">
           <p className="text">Les appartements de la résidence NEXT HOUSE ZENATA ECO CITY
           disposent de beaux volumes et d’espaces de vie lumineux et parfaitement agencés.
           Des matériaux nobles et des équipements de qualité rigoureusement sélectionnés
           embelissent ces appartements chics et fonctionnels.</p>
           <nav>
             <p><img src={Tiret} /> Revêtement en marbre </p>
             <p><img src={Tiret} /> Parquet dans les chambres </p>
             <p><img src={Tiret} /> Menuiserie en bois de chêne </p>
             <p><img src={Tiret} /> Menuiserie aluminium de qualité </p>
             <p><img src={Tiret} /> Robinetterie et sanitaires contemporains </p>
             <p><img src={Tiret} /> Cuisine équipée </p>
             <p><img src={Tiret} /> Fibre optique </p>
             <p><img src={Tiret} /> Ascenseur depuis le sous-sol </p>
           </nav>
         </div>
       </div>
    </StyledWrapper>
    <StyledGallery>
      <h1>Découvrez notre <br /> appartement témoin</h1>

      <div className="cols">
        <div className="col col-1">
           <div><p>PHOTO</p></div>
        </div>
        <div className="col col-2">
           <div><p>VIDEO</p></div>
        </div>
        <div className="col col-3">
           <div><p>VISITE <br /> VIRTUELLE</p></div>
        </div>
      </div>
    </StyledGallery>
    <StyledBottom>
      <img className="img1" src={Pattern1} />
      <h1>À la recherche de votre futur maison ?</h1>
      <p>NEXT HOUSE répond à tous vos critères haut standing <br />
        pour un confort à votre mesure</p>

      <div className="navs">
        <div>
          <img src={IconPhone} alt="icone phone" />
          <p>Faites-vous <br />
          rappeller</p>
        </div>
        <div>
          <img src={IconDownload} alt="icone phone" />
          <p>Télécharger <br />
           la brochure</p>
        </div>
        <div>
          <img src={IconRdv} alt="icone phone" />
          <p>Réserver un <br />
           RDV</p>
        </div>
      </div>
      <img className="img2" src={Pattern2} />
    </StyledBottom>

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
