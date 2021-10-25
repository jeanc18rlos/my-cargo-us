import React from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSlider } from './styled/StyledSlider';
import { Button, Card, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

interface SlideProps {
  image: string;
  title: string;
  description: string;
  button: SliderButton;
}

interface SliderButton {
  link: string;
  label: string;
  variant: string;
}

interface Props {
  slides: Array<SlideProps>;
  title: string;
  headLine: string;
  description: string;
}

SwiperCore.use([Autoplay, Pagination]);

export const Carousel: React.FC<Props> = ({ slides, title, description, headLine }) => {
  return (
    <StyledSlider>
      <Col sm={24} className="gx-container ">
        <div className="gx-text-center">
          <p className="text-red gx-mb-3">{headLine}</p>
          <h1 className="gx-fs-xxxl gx-font-weight-medium gx-mb-30">{title}</h1>
          <p className="gx-mb-30 mw-200">{description}</p>
        </div>
      </Col>
      <Col className="gx-mb-30" sm={24}>
        <Swiper
          {...{
            autoplay: true,
            loop: true,
            pagination: { clickable: true },
            spaceBetween: 20,
            slidesPerView: 4,
            breakpoints: {
              '0': {
                slidesPerView: 1,
                spaceBetween: 10
              },
              '520': {
                slidesPerView: 2,
                spaceBetween: 20
              },
              '850': {
                slidesPerView: 3,
                spaceBetween: 40
              },
              '1400': {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }
          }}
        >
          {slides.map((item: SlideProps, index: number) => {
            return (
              <SwiperSlide key={`mcu-hero-slide-${index}`}>
                <Card
                  style={{
                    background: `url(${item.image})`,
                    backgroundSize: 'cover'
                  }}
                  className={`gx-card-widget`}
                >
                  <div className="gx-media gx-align-items-center gx-flex-nowrap">
                    <div className="gx-media-body">
                      <h3 className="gx-mb-3 gx-text-white">{item.title}</h3>
                      <p className="gx-text-white gx-mb-3">{item.description}</p>
                      <Button
                        onClick={() => alert(item.button.link)}
                        {...{
                          variant: item.button.variant
                        }}
                        type="danger"
                      >
                        {item.button.label}
                      </Button>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p>
          Logistic & Transport Solutions Saves Your Time.{' '}
          <span className="text-red">
            Find Your Solution <ArrowRightOutlined />
          </span>
        </p>
      </Col>
    </StyledSlider>
  );
};
