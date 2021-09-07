import { useState, useEffect } from "react"
import AnimatedNumber from "animated-number-react"
import { useInView } from "react-intersection-observer"
interface SingleBenefit {
  title: string
  content: string
}
export interface BenefitData {
  background: string
  title: string
  label: string
  list: Array<SingleBenefit>
  id: string
}
interface BenefitProps {
  data: BenefitData
}

const Benefit = ({ data: { background, title, label, id, list } }: BenefitProps) => {
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 })
  const [state, setState] = useState({
    value: 0,
  })
  useEffect(() => {
    if (section1InView) {
      setState({
        value: 25000,
      })
    } else {
      setState({
        value: 0,
      })
    }
    return () => {
      setState({
        value: 0,
      })
    }
  }, [section1InView])
  return (
    <section ref={section1Ref} className="about pt-70" id="about-1">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="about-img about-img-left">
              <div className="about-img-warp bg-overlay bg-section" style={{ backgroundImage: `url("${background}")` }}></div>
              <div className="counter">
                <div className="counter-icon">
                  <i className="flaticon-018-packaging" />
                </div>
                <div className="counter-num">
                  <span className="counting">
                    <AnimatedNumber formatValue={(value: any) => `+${Number(value).toFixed()}`} value={state.value} duration={1000} />
                  </span>
                </div>
                <div className="counter-name">
                  <h6>{label}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="heading heading-3">
              <h2 className="heading-title">{title}</h2>
            </div>
            <div className="about-block">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="block-right">
                    {list.slice(0, list.length / 2 - 1).map((detail) => {
                      return (
                        <div key={`${id}-detail-${detail.title.split(" ")[0]}`} className="detail">
                          <h6>{detail.title}</h6>
                          <p>{detail.content}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="block-right">
                    {list.slice(list.length / 2, list.length - 1).map((detail) => {
                      return (
                        <div key={`${id}-detail-${detail.title.split(" ")[0]}`} className="detail">
                          <h6>{detail.title}</h6>
                          <p>{detail.content}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Benefit
