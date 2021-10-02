import { TranslucentCardAtom } from '../../atoms/';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSlider } from './styled/StyledSlider';

type Props = {
  payload: {
    icon: string;
    title: string;
    link: string;
    label: string;
    active: boolean;
  }[];
};

export const TranslucentCard = (props: Props) => {
  return (
    <StyledSlider>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
          '240': {
            slidesPerView: 1,
            spaceBetween: 10
          },
          '720': {
            slidesPerView: 2,
            spaceBetween: 10
          },
          '1080': {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }}
      >
        {props.payload.map((Tcard, key) => (
          <SwiperSlide key={key}>
            <TranslucentCardAtom {...Tcard} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSlider>
  );
};
