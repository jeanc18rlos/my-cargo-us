import styled from 'styled-components';
import { rem } from 'polished';

export const StyledSlider = styled.div`
  .swiper-container {
    min-height: 70vh;
    height: fit-content;
    width: 100%;
    flex-direction: column-reverse;
    display: flex;
    margin-bottom: ${rem('-80px')};
    .caption {
      min-height: 70vh;
      padding-top: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 1023px) {
        padding-top: 110px;
      }
    }
    .swiper-wrapper {
      margin-bottom: ${rem('60px')};
    }
    .swiper-pagination {
      position: relative;
      margin-top: -100px;
      padding-bottom: 30px;
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
    background-color: #ffffff;
  }

  span.swiper-pagination-bullet-active {
    width: 3em;
    transition: width 0.2s linear;
    background-color: #c7c7c7;
  }

  .hero-content {
    display: flex;
    width: 100%;
    .caption {
      margin-bottom: 5rem;
      max-width: 600px;
    }
    p {
      font-size: 16px;
      color: white;
    }
    h2 {
      font-size: 72px;
      color: white;
      @media screen and (max-width: 580px) {
        font-size: 56px;
      }
      @media screen and (max-width: 440px) {
        font-size: 46px;
      }
      @media screen and (max-width: 350px) {
        font-size: 42px;
      }
      @media screen and (max-width: 330px) {
        font-size: 36px;
      }
    }
  }
`;
