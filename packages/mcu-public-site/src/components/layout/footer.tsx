import * as React from 'react'
import { Link, navigate } from 'gatsby'

interface FooterAbout {
  content: string
  label: string
}
interface FooterPhone {
  link: string
  number: string
}

interface FooterContact {
  address: string
  content: string
  link: string
  phone: FooterPhone
  title: string
}
interface FooterCopyright {
  title: string
}
interface FooterLink {
  links: Array<FooterSubLink>
  title: string
}
interface FooterSubLink {
  label: string
  link: string
}

interface FooterRegister {
  button: FooterRegisterButton
  text: string
}
interface FooterSocialMedia {
  icon: string
  label: string
  link: string
}
interface FooterRegisterButton {
  label: string
  link: string
}

export interface FooterData {
  background: string
  about: FooterAbout
  contact: FooterContact
  copyright: FooterCopyright
  links: Array<FooterLink>
  logo: string
  register: FooterRegister
  social_media: Array<FooterSocialMedia>
}

interface Props {
  data: FooterData
}
const Footer = ({
  data: {
    background,
    about,
    contact,
    copyright,
    links,
    logo,
    social_media,
    register
  }
}: Props) => (
  <footer
    style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    className="footer footer-1"
  >
    <div className="footer-top">
      <div className="container">
        <div
          style={{
            alignItems: 'center'
          }}
          className="row"
        >
          <div className="col-12 col-lg-3 col-xl-4">
            <div className="footer-logo">
              <img className="footer-logo" src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-12 col-lg-9 col-xl-8">
            <div className="widget-newsletter">
              <div className="widget-content">
                <p>{register.text}</p>
                <div className="form-newsletter mailchimp">
                  <button
                    onClick={() => navigate(register.button.link)}
                    className="btn btn--primary"
                  >
                    {register.button.label}
                  </button>
                  <div className="subscribe-alert" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-3 footer-widget widget-about">
            <div className="footer-widget-title">
              <h3>{about.label}</h3>
            </div>
            <div className="widget-content">
              <p>{about.content}</p>
              <div className="module module-social">
                {social_media.map((node, nodeIndex) => {
                  return (
                    <a
                      key={`footer-social${node.label}-${nodeIndex}`}
                      className={`share-${node.label}`}
                      href={node.link}
                    >
                      <i className={`fab ${node.icon}`}> </i>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          {links.map((link, index) => {
            return (
              <div
                key={`footer-links-${link.title}-${index}`}
                className="col-sm-6 col-md-6 col-lg-2 offset-lg-1 footer-widget widget-links"
              >
                <div className="footer-widget-title">
                  <h5>{link.title}</h5>
                </div>
                <div className="widget-content">
                  <ul>
                    {link.links.map((subLink, subLinkIndex) => (
                      <li key={`${subLink.label}-${subLinkIndex}`}>
                        <Link to={subLink.link}>{subLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}

          <div className="col-sm-6 col-md-6 col-lg-3 footer-widget widget-contact">
            <div className="footer-widget-title">
              <h5>{contact.title}</h5>
            </div>
            <div className="widget-content">
              <p>{contact.content}</p>
              <ul>
                <li className="phone">
                  <a href={contact.phone.link}>
                    <i className="fas fa-phone-alt" />
                    {contact.phone.number}
                  </a>
                </li>
                <li className="address">
                  <a onClick={e => e.preventDefault()}>{contact.address}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    <div className="footer-bottom">
      <div className="row">
        <div className="col-md-12 col-md-12 text--center footer-copyright">
          <div className="copyright">
            <span>
              {copyright.title} {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
