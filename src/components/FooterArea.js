import React from 'react'

const FooterArea = () => {
  return (
    <section className="footer-widget-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-widget d-flex flex-wrap justify-content-between">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="lnr lnr-pushpin" />
              </div>
              <div className="desc">
                <h6 className="title text-uppercase">Address</h6>
                <p>
                  56/8, panthapath, west <br /> dhanmondi, kalabagan, <br />Dhaka
                  - 1205
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-widget d-flex flex-wrap justify-content-between">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="lnr lnr-earth" />
              </div>
              <div className="desc">
                <h6 className="title text-uppercase">Email Address</h6>
                <div className="contact">
                  <a href="mailto:info@dataarc.com">info@dataarc.com</a> <br />
                  <a href="mailto:support@dataarc.com">support@dataarc.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-widget d-flex flex-wrap justify-content-between">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="lnr lnr-phone" />
              </div>
              <div className="desc">
                <h6 className="title text-uppercase">Phone Number</h6>
                <div className="contact">
                  <a href="tel:1545">012 4562 982 3612</a> <br />
                  <a href="tel:54512">012 6321 956 4587</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterArea
