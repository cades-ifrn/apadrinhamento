import React from 'react'

import logo from '../assets/img/logo.png'

const Header = () => (
  <header>
    <div className="container">
      <div className="header-wrap">
        <div className="header-top d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo da CADES" />
            </a>
          </div>
          <div className="main-menubar d-flex align-items-center">
            <nav className="hide">
              <a href="https://cades.natal.br">CADES</a>
              <a href="https://apadrinhamento.cades.natal.br">Apadrinhamento</a>
              <a href="https://github.com/cades-ifrn">GitHub</a>
            </nav>
            <div className="menu-bar">
              <span className="lnr lnr-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
