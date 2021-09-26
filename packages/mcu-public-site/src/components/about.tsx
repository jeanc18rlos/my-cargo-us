import ReactHtmlParser from "react-html-parser"

interface AboutProps {
  data: {
    title: string
    id: string
    content_type: string
    body: {
      intro: string
    }
  }
}

const About = (props: AboutProps) => {
  const { body } = props.data
  console.log(props)
  return (
    <>
      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">{ReactHtmlParser(body.intro)}</div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
