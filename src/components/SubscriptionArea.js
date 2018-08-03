import React from 'react'

const SubscriptionArea = () => {
  return (
    <section className="subscription-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h3>O que você está esperando?</h3>
              <p className="text-uppercase">
                Estamos ansiosos para te recepcionar
              </p>
              <a
                href="http://bit.ly/cades-wpp"
                className="primary-btn hover d-inline-flex align-items-center"
              >
                <span className="mr-10">Participar</span>
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionArea
