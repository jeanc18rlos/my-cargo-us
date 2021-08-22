import { navigate } from '@reach/router'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
interface Membership {
  title: string
  desc: string
  benefits: Array<string>
  link: string
  placeHolder: string
  isHighlighted: boolean
}
interface MembershipData {
  id: string
  subTitle: string
  title: string
  content: string
  highlightPlaceHolder: string
  memberships: Array<Membership>
}
interface MembershipProps {
  data: MembershipData
}
const Memberships = ({ data }: MembershipProps) => {
  return (
    <section
      className="services services-2 bg-section"
      id="services-2"
      style={{
        backgroundColor: '#002867',
        backgroundBlendMode: 'overlay',
        backgroundImage: 'url("/map-pattern.png")'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text--center">
              <p
                style={{
                  color: '#d1d1d1'
                }}
                className="heading-subtitle"
              >
                {data.subTitle}
              </p>
              <h2
                style={{
                  color: 'white'
                }}
                className="heading-title"
              >
                {data.title}
              </h2>
              <br />
              <p
                style={{
                  color: '#d1d1d1'
                }}
              >
                {ReactHtmlParser(data.content)}
              </p>
            </div>
          </div>
        </div>
        <div className="row services-container">
          {data.memberships.map((membership, key) => {
            return (
              <div
                key={`membership-${membership.title}-${key}`}
                className={`${
                  membership.isHighlighted && 'highlight'
                } col-12 col-md-6 col-lg-4`}
              >
                <div className="service-panel">
                  <div className="service-panel-container">
                    <div
                      style={{
                        padding: '16px'
                      }}
                      className="service-content"
                    >
                      <div className="service-title">
                        <h4 style={{ textAlign: 'center' }}>
                          <a onClick={e => e.preventDefault()}>
                            {membership.title}
                          </a>
                        </h4>
                      </div>
                      <div className="service-desc">
                        <p>{membership.desc}</p>
                      </div>
                      <div className="service-list">
                        <ul className="list-unstyled">
                          {membership.benefits.map((benefit, index) => {
                            return (
                              <li
                                key={`membership-${membership.title}-${key}-benefit-${index}`}
                              >
                                <a onClick={e => e.preventDefault()}>
                                  <i className="fas fa-check-circle" />
                                  <span>{benefit}</span>
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <div className="service-more">
                        <a
                          className="btn"
                          onClick={() => navigate(membership.link)}
                        >
                          <i className="icon-arrow-right" />
                          <span>{membership.placeHolder}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Memberships
