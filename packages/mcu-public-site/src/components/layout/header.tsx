import * as React from 'react'
import { navigate } from 'gatsby'
import { Translation } from 'src/templates/template'

export interface HeaderData {
  links: Array<HeaderLink>
  logo: string
  altLogo: string
  home: HeaderSubLink
  contact: HeaderSubLink
  register: HeaderSubLink
}
interface HeaderLink {
  links: Array<HeaderSubLink>
  label: string
}
interface HeaderSubLink {
  label: string
  link: string
}
interface Props {
  data: HeaderData
  section1InView: boolean
  translations: Array<Translation>
  language: string
}

const Header = ({ data, section1InView, translations, language }: Props) => (
  <header className="header header-1 header-transparent" id="navbar-spy">
    <nav
      className={`navbar navbar-expand-lg  navbar-bordered navbar-sticky ${
        section1InView ? '' : 'navbar-fixed'
      }`}
      id="primary-menu"
    >
      <div className="container">
        <a className="navbar-brand" onClick={() => navigate(data.home.link)}>
          <img
            className="logo logo-light"
            src={data.logo}
            alt={data.home.label}
          />
          <img
            className="logo logo-dark"
            src={data.altLogo}
            alt={data.home.label}
          />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item has-dropdown active">
              <a onClick={() => navigate(data.home.link)}>
                <span>{data.home.label}</span>
              </a>
            </li>

            {data.links.map((item, index) => {
              return (
                <li
                  key={`${item.label}-${index}`}
                  className="nav-item has-dropdown"
                >
                  <a
                    className="dropdown-toggle"
                    onClick={e => e.preventDefault()}
                    data-toggle="dropdown"
                  >
                    <span>{item.label}</span>
                  </a>
                  <ul className="dropdown-menu">
                    {item.links.map((link, ind) => {
                      return (
                        <li
                          key={`${link.label}-${index}-${ind}`}
                          className="nav-item"
                        >
                          <a onClick={() => navigate(link.link)}>
                            <span>{link.label}</span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
            <li className="nav-item">
              <a onClick={() => navigate(data.contact.link)}>
                <span>{data.contact.label}</span>
              </a>
            </li>
          </ul>
          <div className="module-container">
            {/* <div className="module module-search float-left">
                  <div className="module-icon search-icon">
                    <i className="icon-search" />
                    <span className="title">search</span>
                  </div>
                  <div className="module-content module-fullscreen module-search-box">
                    <div className="pos-vertical-center">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                            <form className="form-search">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="type words then enter"
                              />
                              <button />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="module-cancel" href="javascript:void(0)">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  </div>
                    */}
            {/* Start .module-contact */}
            <div className="module-contact">
              <a
                className="btn btn--primary"
                onClick={() => navigate(data.register.link)}
              >
                {data.register.label}
              </a>
            </div>
            {/* Start .module-language */}
            <div className="module module-language">
              <div className="selected">
                <span>{language} </span>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="lang-list">
                <ul>
                  {translations.map((translation, index) => {
                    return (
                      <li key={`translate-${translation.label}-${index}`}>
                        <a onClick={() => navigate(translation.path)}>
                          {translation.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
