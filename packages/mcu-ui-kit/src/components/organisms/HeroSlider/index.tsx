import React from 'react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSlider } from './styled/StyledSlider';
import { Button } from 'antd';

enum MediaTypes {
  'video',
  'image'
}
interface SlideProps {
  type: keyof typeof MediaTypes;
  mediaUrl: string;
  title: string;
  headline: string;
  description: string;
  buttons: Array<SliderButton>;
}

interface SliderButton {
  link: string;
  label: string;
  variant: string;
}

interface Props {
  slides: Array<SlideProps>;
  onClick: (to: string) => void;
}

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const HeroSlider: React.FunctionComponent<Props> = ({ slides, onClick }) => {
  return (
    <StyledSlider>
      <Swiper
        {...{
          autoplay: false,
          loop: true,
          pagination: { clickable: true },
          spaceBetween: 0,
          navigation: true
        }}
      >
        {slides.map((item: SlideProps, index: number) => {
          return (
            <SwiperSlide key={`mcu-hero-slide-${index}`}>
              <img src={item.mediaUrl} />

              <div className="hero-content">
                <div className="gx-container">
                  <div className="caption">
                    <div className="caption-wrapper">
                      <p>{item.headline}</p>
                      <h2 className="gx-mb-3">{item.title}</h2>
                      <p>{item.description}</p>

                      {item.buttons.map((button, key) => {
                        return (
                          <Button
                            key={`mcu-hero-slide-${index}-button-${key}`}
                            onClick={() => onClick(button.link)}
                            className={['gx-mb-0', `btn-${button.variant}`].join(' ')}
                          >
                            {button.label}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSlider>
  );
};
