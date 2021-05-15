import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Capoeira from './components/Capoeira/Capoeira';
import MyCarousel from './components/Carusele/Carusele';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Capoeira />
    <MyCarousel />
  </React.StrictMode>,
  document.getElementById('root')
);