import React from 'react';
import { Carousel } from '.';
import { carousel_card } from '../../../assets';
export default {
  title: 'Components/Organisms/CarouselSection',
  component: Carousel
};

const slides = [
  {
    image: carousel_card.carousel_card_1,
    title: `full sustainable cargo solutions!`,

    description:
      'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
    button: {
      link: '/data',
      label: 'more about us',
      variant: 'primary'
    }
  },

  {
    image: carousel_card.carousel_card_2,
    title: `full sustainable cargo solutions!`,

    description:
      'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
    button: {
      link: '/data',
      label: 'more about us',
      variant: 'primary'
    }
  },
  {
    image: carousel_card.carousel_card_3,
    title: `full sustainable cargo solutions!`,

    description:
      'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
    button: {
      link: '/data',
      label: 'more about us',
      variant: 'primary'
    }
  },
  {
    image: carousel_card.carousel_card_4,
    title: `full sustainable cargo solutions!`,

    description:
      'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
    button: {
      link: '/data',
      label: 'more about us',
      variant: 'primary'
    }
  },
  {
    image: carousel_card.carousel_card_1,
    title: `full sustainable cargo solutions!`,

    description:
      'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
    button: {
      link: '/data',
      label: 'more about us',
      variant: 'primary'
    }
  },

  {
    image: carousel_card.carousel_card_2,
    title: `full sustainable cargo solutions!`,

    description:
      'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
    button: {
      link: '/data',
      label: 'more about us',
      variant: 'primary'
    }
  },
  {
    image: carousel_card.carousel_card_3,
    title: `full sustainable cargo solutions!`,

    description:
      'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
    button: {
      link: '/data',
      label: 'more about us',
      variant: 'primary'
    }
  },
  {
    image: carousel_card.carousel_card_4,
    title: `full sustainable cargo solutions!`,

    description:
      'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
    button: {
      link: '/data',
      label: 'more about us',
      variant: 'primary'
    }
  }
];
const title = 'Services offered by My Cargo US that are tailored to your needs.';
const headLine = 'Dedicated Customer Teams & An Agile Services';
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, risus egestas ornare libero, gravida';
export const base = () => {
  return (
    <Carousel
      {...{
        slides,
        title,
        headLine,
        description
      }}
    />
  );
};
