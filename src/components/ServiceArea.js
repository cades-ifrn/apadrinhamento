import React from 'react'

import volunteers from '../assets/volunteers.json'

volunteers.sort((a, b) => {
  let nameA = a.name.toUpperCase()
  let nameB = b.name.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  // names must be equal
  return 0
})

const getServiceItemStyle = (image, isAvailable) => ({
  background: `url(${image})`,
  filter: `grayscale(${isAvailable ? 0 : 100}%)`,
})

const ServiceItem = ({ image, title, description, link, isAvailable }) => (
  <div className="col-lg-3 col-sm-6">
    <div className="single-service">
      <div className="thumb" style={getServiceItemStyle(image, isAvailable)}>
        <div className="overlay overlay-content d-flex justify-content-center align-items-center">
          <a
            href={link}
            target="blank"
            className="primary-btn hover d-inline-flex align-items-center"
          >
            <span className="mr-10">Conhecer</span>
            <span className="lnr lnr-arrow-right" />
          </a>
        </div>
      </div>
      <div className="desc">
        <h6 className="text-uppercase text-white">
          {title}
          {!isAvailable && (
            <small
              style={{ color: '#ccc', fontSize: '0.8em', marginLeft: 'auto' }}
            >
              {' '}
              <span className="lnr lnr-flag" /> Indisponível
            </small>
          )}
        </h6>
        <p className="text-white">{description}</p>
      </div>
    </div>
  </div>
)

const ServiceArea = () => {
  return (
    <section className="service-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h3 className="text-white">Padrinhos e Madrinhas</h3>
              <span className="text-white text-uppercase">
                Mural dos Voluntários
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          {volunteers.map((v, index) => (
            <ServiceItem
              key={index}
              title={v.name}
              description={v.description}
              image={v.image}
              link={v.link}
              isAvailable={v.availability}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
