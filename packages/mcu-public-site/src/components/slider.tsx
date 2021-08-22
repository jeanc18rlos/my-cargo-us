import { navigate } from 'gatsby'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactHtmlParser from 'react-html-parser'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'

SwiperCore.use([Autoplay, Pagination, Navigation])

interface Slide {
  mediaType: string
  mediaUrl: string
  subTitle: string
  headline: string
  description: string
  buttons: Array<SliderButton>
}

interface SliderButton {
  link: string
  label: string
  variant: string
}

export interface SliderData {
  slides: Array<Slide>
  id: string
}

interface SliderProps {
  data: SliderData
}

const Slider = (props: SliderProps) => {
  const {
    data: { slides, id }
  } = props
  return (
    <section className="slider slider-1" id="slider-1">
      <div className="container-fluid pr-0 pl-0">
        <Swiper
        loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          className="carousel owl-carousel custom-carousel carousel-navs carousel-dots"
        >
          {slides.map((slide, position) => {
            const {
              mediaType,
              mediaUrl,
              subTitle,
              headline,
              description,
              buttons
            } = slide
            return (
              <SwiperSlide key={`${id}-${position}`}>
                <div
                  className="slide d-flex align-items-center bg-overlay bg-overlay-dark bg-section"
                  style={
                    mediaType === 'image'
                      ? {
                          backgroundImage: `url(${mediaUrl})`
                        }
                      : {}
                  }
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-7">
                        <div className="slide-content">
                          <p className="slide-subheadline">
                            {ReactHtmlParser(subTitle)}
                          </p>
                          <h2 className="slide-headline">
                            {ReactHtmlParser(headline)}
                          </h2>
                          <p className="slide-desc">{description}</p>
                          <div className="slide-buttons">
                            {buttons.map((button, buttonIndex) => {
                              const { link, label, variant } = button
                              return (
                                <a
                                  key={`${id}-${position}-button-${buttonIndex}`}
                                  className={`btn btn--${variant}`}
                                  onClick={() => {
                                    navigate(link)
                                  }}
                                >
                                  {label}
                                </a>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Slider
