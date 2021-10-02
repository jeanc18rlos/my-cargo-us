import { TranslucentCard } from './TranslucentCard';

export default {
  title: 'Components/Molecules/TranslucentCard',
  component: TranslucentCard
};

export const base = () => (
  <div
    style={{
      height: 300,
      backgroundImage:
        'url(https://www.wagenborg.com/media/1002/header.jpg?anchor=center&amp;mode=crop&amp;width=1800&amp;height=950&amp;rnd=132025816910000000)'
    }}
  >
    <TranslucentCard
      payload={[
        { title: 'title 1', label: 'label', active: false, link: '', icon: '' },
        { title: 'title 2', label: 'label', active: true, link: '', icon: '' },
        { title: 'title 3', label: 'label', active: false, link: '', icon: '' }
      ]}
    />
  </div>
);
