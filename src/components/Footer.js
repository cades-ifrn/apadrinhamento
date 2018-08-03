import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-content d-flex justify-content-between align-items-center flex-wrap">
                <div className="logo">
                    <img src="img/logo.png" alt="" />
                </div>
                <div className="copy-right-text">Copyright &copy; 2017  |  All rights reserved to Dinomuz inc. This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></div>
                <div className="footer-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-behance"></i></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
