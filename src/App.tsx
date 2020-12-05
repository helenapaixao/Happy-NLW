import React from 'react';
import './styles/global.css'
import './styles/pages/landing.css'
import logoImg from './assets/images/Logo.svg';

function App() {
  return (
      <div id="page-landing">
          <div className="content-wrapper">
              <img src={logoImg} alt="Logo"/>
          </div>
         <h1>Hello Bitch </h1>
      </div>
 
  );
}

export default App;
