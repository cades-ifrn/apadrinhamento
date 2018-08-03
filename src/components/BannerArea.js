import React from 'react'

const BannerArea = () => {
  return (
    <div className="banner-area">
      <div className="container">
        <div className="row justify-content-center height align-items-center">
          <div className="col-lg-8">
            <div className="banner-content text-center">
              <span className="text-white top text-uppercase">
                Uma iniciativa CADES
              </span>
              <h1 className="text-white text-uppercase">Apadrinhamento</h1>
              <a
                href="#"
                className="primary-btn d-inline-flex align-items-center"
              >
                <span className="mr-10">Fique por dentro</span>
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerArea
