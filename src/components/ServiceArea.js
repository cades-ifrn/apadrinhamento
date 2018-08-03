import React from 'react'

import S1 from '../assets/img/s1.jpg'
import S2 from '../assets/img/s2.jpg'
import S3 from '../assets/img/s3.jpg'
import S4 from '../assets/img/s4.jpg'
import S5 from '../assets/img/s5.jpg'
import S6 from '../assets/img/s6.jpg'
import S7 from '../assets/img/s7.jpg'
import S8 from '../assets/img/s8.jpg'


const ServiceItem = ({image, title, description}) => (
    <div className="col-lg-3 col-sm-6">
        <div className="single-service">
            <div className="thumb" style={{background: `url(${image})`}}>
                <div className="overlay overlay-content d-flex justify-content-center align-items-center">
                    <a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
                </div>
            </div>
            <div className="desc">
                <h6 className="text-uppercase text-white">{title}</h6>
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
                        <h3 className="text-white">Our Offered Services</h3>
                        <span className="text-white text-uppercase">Re-imagining the way</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <ServiceItem image={S1} title="Creative Design" description="WordPress, the premier free open-source blogging utility, has gone through several upgrades in" />
                <ServiceItem image={S2} title="Creative Design" description="WordPress, the premier free open-source blogging utility, has gone through several upgrades in" />
                <ServiceItem image={S3} title="Creative Design" description="WordPress, the premier free open-source blogging utility, has gone through several upgrades in" />
                <ServiceItem image={S4} title="Creative Design" description="WordPress, the premier free open-source blogging utility, has gone through several upgrades in" />
                <ServiceItem image={S5} title="Creative Design" description="WordPress, the premier free open-source blogging utility, has gone through several upgrades in" />
                <ServiceItem image={S6} title="Creative Design" description="WordPress, the premier free open-source blogging utility, has gone through several upgrades in" />
                <ServiceItem image={S7} title="Creative Design" description="WordPress, the premier free open-source blogging utility, has gone through several upgrades in" />
                <ServiceItem image={S8} title="Creative Design" description="WordPress, the premier free open-source blogging utility, has gone through several upgrades in" />
            </div>
        </div>
    </section>
  )
}

export default ServiceArea
