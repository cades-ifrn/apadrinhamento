import React from 'react'

const FeaturedArea = () => {
  return (
    <section className="featured-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-feature d-flex flex-wrap justify-content-between">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="lnr lnr-sun" />
              </div>
              <div className="desc">
                <h6 className="title text-uppercase">Calouros</h6>
                <p>
                  Começar um novo curso sempre é díficil e estamos aqui para te
                  ajudar nessa nova etapa da sua vida
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-feature d-flex flex-wrap justify-content-between">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="lnr lnr-bubble" />
              </div>
              <div className="desc">
                <h6 className="title text-uppercase">Comunicação</h6>
                <p>
                  A comunicação e interação com outras pessoas é fundamental no
                  nosso curso. Ninguém está sozinho
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-feature d-flex flex-wrap justify-content-between">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="lnr lnr-users" />
              </div>
              <div className="desc">
                <h6 className="title text-uppercase">Acompanhamento</h6>
                <p>
                  Padrinhos e madrinhas se dispõem a contribuir com seu
                  progresso durante o curso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedArea
