import React from 'react';
//import ReactDOM from 'react-dom';
import logoCapoeira from './logo-capoeira.jpg';
import './Capoeira.css';
//import Carousel from 'react-bootstrap/Carousel';

function Capoeira() {
    return (
      <div className="Capoeira">
          <img src={logoCapoeira} className="Capoeira-logo" alt="logo" />

          <h1 className="Capoeira-title">КАПОЕЙРА</h1>
          <h2 className="Capoeira-title">афробразильське бойове мистецтво</h2>

        <p className="Capoeira-text">
          Капое́йра (порт. capoeira) — афробразильське бойове мистецтво з елементами танцю, 
          музики і акробатики. Вважається, що традиційна капоейра виникла в XVII столітті 
          в Бразилії в середовищі африканських рабів. Сучасна капоейра починається з 30-х 
          років XX століття. Зараз капоейра є популярним видом спорту як у Бразилії так 
          і далеко за її межами і налічує десятки тисяч прихильників у всьому світі. 
          26 листопада 2014 року Капуейру було включено до Репрезентативного списку 
          нематеріальної культурної спадщини людства ЮНЕСКО.
          </p>


          
      </div>
    );
  }
  
  export default Capoeira;