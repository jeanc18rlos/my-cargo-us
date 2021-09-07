import { BuildArgs, Actions } from "gatsby"

interface CreatePages extends BuildArgs {
  graphql: any
  actions: Actions
}

type page = {
  id: string
  content_type: string
  slug: string
  seo: { [key: string]: string }
  translations: { [key: string]: any }[]
  language: string
  components: { [key: string]: any }[]
}

const createPages = async (props: CreatePages) => {
  const layouts = {
    en: {},
    es: {},
  }

  const components = {
    slider: {},
    shortcut: {},
    hero: {},
    location: {},
    benefit: {},
    faq: {},
    contact: {},
    about: {},
    carousel: {},
    service: {},
    membership: {},
  }

  const result: any = await props.graphql(`
  fragment Carousel on carousel {
    id
    content_type
    title
    desc
    subTitle
    slides {
      image
      label
    }
  }
  
  fragment Service on service {
    id
    content_type
    title
    subTitle
    slides {
      image
      title
      desc
      label
      link
      features
    }
  }
  
  fragment Membership on membership {
    id
    content_type
    subTitle
    title
    content
    highlightPlaceHolder
    memberships {
      title
      desc
      benefits
      link
      placeHolder
      isHighlighted
    }
  }
  fragment Slider on slider {
    id
    content_type
    slides {
      description
      headline
      mediaType
      mediaUrl
      subTitle
      buttons {
        label
        link
        variant
      }
    }
  }
  fragment Contact on contact {
    id
    content_type
    title
    form {
      submit
      name
      email
      message
      subject {
        label
        subjects {
          subject
        }
      }
    }
    schedule {
      title
      schedules {
        days
        hours
      }
    }
    details {
      title
      location
      contact_number
      whatsapp
      email
    }
  }
  fragment About on about {
    id
    content_type
    title
    body {
      intro
    }
  }
  fragment Location on location {
    content_type
    id
    title
    content
    locations {
      country
      locations {
        name
        lat
        lng
      }
    }
  }
  fragment Hero on hero {
    content_type
    id
    background
    title
    links {
      link
      label
    }
  }
  fragment Faq on faq {
    id
    content_type
    label
    contact {
      title
      content
      link
      label
    }
    legal {
      title
      links {
        link
        label
      }
    }
    faq {
      group
      questions {
        question
        answer
      }
    }
  }
  fragment Shortcut on shortcut {
    content_type
    id
    shortcuts {
      icon
      label
      link
      title
    }
  }
  fragment Benefit on benefit {
    content_type
    id
    background
    title
    label
    list {
      title
      content
    }
  }
  fragment Layout on layout {
    content_type
    footer {
      background
      about {
        content
        label
      }
      contact {
        address
        content
        link
        phone {
          link
          number
        }
        title
      }
      copyright {
        title
      }
      links {
        links {
          label
          link
        }
        title
      }
      logo
      register {
        button {
          label
          link
        }
        text
      }
      social_media {
        icon
        label
        link
      }
    }
    header {
      contact {
        label
        link
      }
      register {
        label
        link
      }
      home {
        label
        link
      }
      links {
        label
        links {
          label
          link
        }
      }
      logo
      altLogo
    }
    id
    language
  }
  query {
    allLayout {
      nodes {
        ...Layout
      }
    }
    allLocation {
      nodes {
        ...Location
      }
    }
    allMembership {
      nodes {
        ...Membership
      }
    }
    allCarousel {
      nodes {
        ...Carousel
      }
    }
    allHero {
      nodes {
        ...Hero
      }
    }
    allSlider {
      nodes {
        ...Slider
      }
    }
    allShortcut {
      nodes {
        ...Shortcut
      }
    }
    allBenefit {
      nodes {
        ...Benefit
      }
    }
    allContact {
      nodes {
        ...Contact
      }
    }
    allAbout {
      nodes {
        ...About
      }
    }
    allService {
      nodes {
        ...Service
      }
    }
    allFaq {
      nodes {
        ...Faq
      }
    }
    allPage {
      edges {
        node {
          id
          content_type
          slug
          seo {
            description
            title
          }
          translations {
            path
            label
          }
          language
          components {
            content_type
            id
          }
        }
      }
    }
  }
  
`)

  result.data.allLayout.nodes.forEach((node: any) => {
    layouts[node.language] = node
  })
  result.data.allService.nodes.forEach((node: any) => {
    components.service[node.id] = node
  })
  result.data.allCarousel.nodes.forEach((node: any) => {
    components.carousel[node.id] = node
  })
  result.data.allMembership.nodes.forEach((node: any) => {
    components.membership[node.id] = node
  })
  result.data.allFaq.nodes.forEach((node: any) => {
    components.faq[node.id] = node
  })
  result.data.allContact.nodes.forEach((node: any) => {
    components.contact[node.id] = node
  })
  result.data.allAbout.nodes.forEach((node: any) => {
    components.about[node.id] = node
  })

  result.data.allSlider.nodes.forEach((node: any) => {
    components.slider[node.id] = node
  })
  result.data.allBenefit.nodes.forEach((node: any) => {
    components.benefit[node.id] = node
  })
  result.data.allHero.nodes.forEach((node: any) => {
    components.hero[node.id] = node
  })
  result.data.allLocation.nodes.forEach((node: any) => {
    components.location[node.id] = node
  })
  result.data.allShortcut.nodes.forEach((node: any) => {
    components.shortcut[node.id] = node
  })

  result.data.allPage.edges.forEach(({ node }: any) => {
    const page: page = node
    page.components.forEach(({ content_type, id }: any, index: number) => {
      page.components[index] = components[content_type][id]
    })
    props.actions.createPage({
      path: node.slug,
      component: require.resolve("../src/templates/template.tsx"),
      context: {
        page,
        layout: layouts[page.language],
      },
    })
  })
}

exports.createPages = createPages

exports.onCreateBabelConfig = (props: any) => {
  props.actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  })
}
