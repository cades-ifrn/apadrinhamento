import React from 'react'

import logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content d-flex justify-content-between align-items-center flex-wrap">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="copy-right-text">
            Copyright &copy; 2018 | Célula Acadêmica de Desenvolvimento de
            Software. Layout por{' '}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/cadesifrn/">
              <i className="fa fa-facebook" />
            </a>
            <a href="https://github.com/cades-ifrn">
              <i className="fa fa-github" />
            </a>
            <a href="https://bit.ly/cades-slack">
              <i className="fa fa-slack" />
            </a>
            <a href="https://bit.ly/cades-wpp">
              <i className="fa fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
