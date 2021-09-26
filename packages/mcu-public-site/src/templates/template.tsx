import React from "react"
import loadable from "@loadable/component"
import Layout, { LayoutI } from "../components/layout/layout"
import { useInView } from "react-intersection-observer"
import { SliderData } from "../components/slider"
import { ShortcutData } from "../components/shortcut"
import { LocationsData } from "../components/locations"
import { HeroData } from "../components/hero"
import SEO, { SeoI } from "../components/seo"
interface PageI {
  translations: Array<Translation>
  seo: SeoI
  components: Array<SliderData | ShortcutData | HeroData | LocationsData>
}

export interface Translation {
  path: string
  label: string
}
interface PageContext {
  layout: LayoutI
  page: PageI
}
interface PageData {
  pageContext: PageContext
}
const Slider = loadable(() => import("../components/slider"))
const Shortcut = loadable(() => import("../components/shortcut"))
const Hero = loadable(() => import("../components/hero"))
const Location = loadable(() => import("../components/locations"))
const Benefit = loadable(() => import("../components/benefit"))
const Contact = loadable(() => import("../components/contact"))
const Faq = loadable(() => import("../components/faq"))
const Membership = loadable(() => import("../components/memberships"))
const Service = loadable(() => import("../components/services"))
const Carousel = loadable(() => import("../components/carousel"))
const About = loadable(() => import("../components/about"))

const Components = {
  slider: Slider,
  shortcut: Shortcut,
  benefit: Benefit,
  hero: Hero,
  location: Location,
  contact: Contact,
  faq: Faq,
  membership: Membership,
  service: Service,
  carousel: Carousel,
  about: About,
}

const renderComponent = (referer: string, props: any) => {
  return (
    Components[referer] &&
    React.createElement(Components[referer], {
      ...props,
    })
  )
}

const PageTemplate = ({
  pageContext: {
    page: { translations, seo, components },
    layout,
  },
}: PageData) => {
  console.log(components)
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 })
  return (
    <Layout section1InView={section1InView} {...{ ...layout, translations }}>
      <SEO lang={layout.language} title={seo.title} description={seo.description} />
      <div style={{ height: "100vh", position: "absolute" }} ref={section1Ref}></div>
      <React.Fragment>
        {components.map((item: any, key: number) => {
          return renderComponent(item.content_type, {
            key: `mcu-${item.id}-${item.ref}-${key}`,
            data: item,
          })
        })}
      </React.Fragment>
    </Layout>
  )
}
export default PageTemplate
