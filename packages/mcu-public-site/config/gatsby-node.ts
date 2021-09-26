/**
 * 
 * 
 * import { BuildArgs, Actions } from 'gatsby'

interface CreatePages extends BuildArgs {
  actions: Actions
}

exports.createPages = async ({
  graphql,
  actions: { createPage }
}: CreatePages) => {
  try {
    const layouts: any = {
      en: {},
      es: {}
    }
    const components: any = {
      slider: {},
      shortcut: {},
      hero: {},
      location: {},
      benefit: {},
      faq: {},
      contact: {},
      carousel: {},
      service: {},
      membership: {}
    }

    const result: any = await graphql(`
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
    await result.data.allLayout.nodes.forEach((node: any) => {
      layouts[node.language] = node
    })
    await result.data.allService.nodes.forEach((node: any) => {
      components.service[node.id] = node
    })
    await result.data.allCarousel.nodes.forEach((node: any) => {
      components.carousel[node.id] = node
    })
    await result.data.allMembership.nodes.forEach((node: any) => {
      components.membership[node.id] = node
    })
    await result.data.allFaq.nodes.forEach((node: any) => {
      components.faq[node.id] = node
    })
    await result.data.allContact.nodes.forEach((node: any) => {
      components.contact[node.id] = node
    })
    await result.data.allSlider.nodes.forEach((node: any) => {
      components.slider[node.id] = node
    })
    await result.data.allBenefit.nodes.forEach((node: any) => {
      components.benefit[node.id] = node
    })
    await result.data.allHero.nodes.forEach((node: any) => {
      components.hero[node.id] = node
    })
    await result.data.allLocation.nodes.forEach((node: any) => {
      components.location[node.id] = node
    })
    await result.data.allShortcut.nodes.forEach((node: any) => {
      components.shortcut[node.id] = node
    })

    await result.data.allPage.edges.forEach(async ({ node }: any) => {
      const page: any = node
      await page.components.forEach(
        ({ content_type, id }: any, index: number) => {
          page.components[index] = components[content_type][id]
        }
      )
      await createPage({
        path: node.slug,
        component: require.resolve('../src/templates/template.tsx'),
        context: {
          page,
          layout: layouts[page.language]
        }
      })
    })
  } catch (error) {
    console.log(error)
  }
}

 * 
 * 
 */
