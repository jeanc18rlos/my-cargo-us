import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'
import ReactHtmlParser from 'react-html-parser'
SwiperCore.use([Autoplay, Pagination, Navigation])

interface CarouselSlide {
  image: string
  label: string
}
export interface CarouselData {
  id: string
  title: string
  desc: string
  subTitle: string
  slides: Array<CarouselSlide>
}
interface CarouselProps {
  data: CarouselData
}
const Carousel = ({
  data: { id, title, desc, subTitle, slides }
}: CarouselProps) => {
  return (
    <section
      style={{
        paddingTop: '140px'
      }}
      className="cases-clients bg-parllax"
      id="cases-clients-1"
    >
      <div className="clients clients-carousel clients-1 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <div className="heading heading-5 text-center">
                <p className="heading-subtitle">{subTitle}</p>
                <h2 className="heading-title">{title}</h2>
                <div style={{ textAlign: 'left' }} className="heading-desc">
                  {ReactHtmlParser(desc)}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  640: {
                    slidesPerView: 6,
                    spaceBetween: 40
                  }
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                pagination={{
                  clickable: true
                }}
                className="carousel owl-carousel"
              >
                {slides.map((slide, slideIndex) => (
                  <SwiperSlide key={`carousel-${id}-slide-${slideIndex}`}>
                    <div className="client">
                      <img src={slide.image} alt={slide.label} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Carousel
