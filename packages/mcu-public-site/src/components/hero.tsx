import { navigate } from 'gatsby'
import React from 'react'

interface HeroLink {
  link: string
  label: string
}
export interface HeroData {
  background: string
  title: string
  links?: Array<HeroLink>
  id: string
}
interface HeroProps {
  data: HeroData
}
const Hero = ({ data: { background, title, links, id } }: HeroProps) => {
  return (
    <section
      className="page-title page-title-6 bg-overlay bg-overlay-dark bg-parallax bg-section"
      id="page-title"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="title text-lg-left">
              <div className="title-heading">
                <h1>{title}</h1>
              </div>
              <div className="clearfix" />
              <ol className="breadcrumb justify-content-lg-start">
                {links &&
                  links.map((link, index) => (
                    <li key={`${id}-${index}`} className="breadcrumb-item">
                      <a onClick={() => navigate(link.link)}>{link.label}</a>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
