import React from 'react'

const StoryArea = () => {
  return (
    <section className="story-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="story-title">
              <h3 className="text-white">Apadrinhamento</h3>
              <span className="text-uppercase text-white">
                Uma iniciativa CADES
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="story-box">
              <h6 className="text-uppercase">E você, veterano?</h6>
              <p>
                Não deixe de ajudar seus colegas de curso. Não deixe que outros
                passem pelas dificuldades que você passou sozinho.
              </p>
              <a
                href="https://github.com/cades-ifrn/apadrinhamento/blob/master/VOLUNTEER.md"
                className="primary-btn hover d-inline-flex align-items-center"
              >
                <span className="mr-10">Quero ser voluntário</span>
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryArea
