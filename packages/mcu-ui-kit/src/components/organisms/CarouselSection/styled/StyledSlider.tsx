import styled from 'styled-components';
import { rem } from 'polished';
import { Row } from 'antd';

export const StyledSlider = styled(Row)`
  max-width: 1440px;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: center;

  .gx-media-body {
    text-align: left;
    padding-right: 25%;
    @media screen and (max-width: 320px) {
      padding-right: 0;
    }
  }
  .text-red {
    color: red;
  }
  h1 {
    font-size: 43px;
    margin: auto;
    max-width: 750px;
    @media screen and (max-width: 850px) {
      font-size: 30px;
    }
  }
  .mw-200 {
    max-width: 308px;
    margin: auto;
  }
  .swiper-container {
    height: fit-content;
    width: 100%;
    flex-direction: column-reverse;
    display: flex;

    .caption {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-wrapper {
      margin-bottom: ${rem('12px')};
    }
    .swiper-pagination {
      position: relative;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: flex-start;
    align-items: flex-end;
  }

  .swiper-slide img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    z-index: -1;
  }

  .swiper-pagination-bullet {
    line-height: ${rem('10px')};
    height: ${rem(5)};
    width: ${rem(20)};
    cursor: pointer;
    background-color: rgba(67, 67, 67, 20%);
    transition: background-color 0.2s linear;
  }

  span.swiper-pagination-bullet-active {
    background-color: rgba(67, 67, 67, 100%);
  }
`;
