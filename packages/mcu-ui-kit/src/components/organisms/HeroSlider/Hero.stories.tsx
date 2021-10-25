import React from 'react';
import { HeroSlider } from '.';

export default {
  title: 'Components/Organisms/HeroSlider',
  component: HeroSlider
};

export const base = () => {
  return (
    <HeroSlider
      onClick={to => alert(to)}
      {...{
        slides: [
          {
            type: 'image',
            mediaUrl:
              'https://www.wagenborg.com/media/1002/header.jpg?anchor=center&mode=crop&width=1800&height=950&rnd=132025816910000000',
            title: `full sustainable cargo solutions!`,
            headline: 'Flexibile, Improved And accelerated Solutions',
            description:
              'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
            buttons: [
              {
                link: '/data',
                label: 'our services',
                variant: 'secondary'
              },
              {
                link: '/data',
                label: 'more about us',
                variant: 'primary'
              }
            ]
          },

          {
            type: 'image',
            mediaUrl:
              'https://www.wagenborg.com/media/1002/header.jpg?anchor=center&mode=crop&width=1800&height=950&rnd=132025816910000000',
            title: `full sustainable cargo solutions!`,
            headline: 'Flexibile, Improved And accelerated Solutions',
            description:
              'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
            buttons: [
              {
                link: '/data',
                label: 'our services',
                variant: 'secondary'
              },
              {
                link: '/data',
                label: 'more about us',
                variant: 'primary'
              }
            ]
          }
        ]
      }}
    />
  );
};
