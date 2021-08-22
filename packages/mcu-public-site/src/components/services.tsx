import { navigate } from 'gatsby'
import React from 'react'

interface ServiceSlide {
  image: string
  title: string
  desc: string
  label: string
  link: string
  features: Array<string>
}
interface ServicesData {
  id: string
  title: string
  subTitle: string
  slides: Array<ServiceSlide>
}
interface ServicesProps {
  data: ServicesData
}
const Services = ({ data }: ServicesProps) => {
  return (
    <section className="services" id="services-1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text--center">
              <p className="heading-subtitle">{data.subTitle}</p>
              <h2 className="heading-title">{data.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {data.slides.map((slide, slideIndex) => (
            <div
              key={`${data.id}-slide-${slideIndex}`}
              className=" col-12 col-md-6 col-lg-4"
            >
              <div className="service-panel">
                <div className="service-panel-container">
                  <div className="service-img">
                    <a onClick={e => e.preventDefault()} />
                    <img src={slide.image} alt={slide.label} />
                  </div>
                  <div className="service-content">
                    <div className="service-title">
                      <h4>
                        <a onClick={e => e.preventDefault()}>{slide.title}</a>
                      </h4>
                    </div>
                    <div className="service-desc">
                      <p>{slide.desc}</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-unstyled">
                        {slide.features.map((feature, featureIndex) => (
                          <li
                            key={`${data.id}-slide-${slideIndex}-feature-${featureIndex}`}
                          >
                            <a>
                              <i className="fas fa-check-circle" />
                              <span>{feature}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-more">
                      <a className="btn" onClick={() => navigate(slide.link)}>
                        <i className="icon-arrow-right" />
                        <span>{slide.label}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
