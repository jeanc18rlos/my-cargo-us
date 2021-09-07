import { ReactChild } from "react"

import Header, { HeaderData } from "./header"
import Footer, { FooterData } from "./footer"
import { Translation } from "../../templates/template"

interface Props extends LayoutI {
  children: ReactChild | Array<ReactChild>
  section1InView: boolean
  translations: Array<Translation>
}
export interface LayoutI {
  language: string
  header: HeaderData
  footer: FooterData
}
const Layout = ({ children, header, translations, footer, section1InView, language }: Props) => {
  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <Header section1InView={section1InView} translations={translations} data={header} language={language} />
      <main>{children}</main>
      <Footer data={footer} />
    </div>
  )
}

export default Layout
