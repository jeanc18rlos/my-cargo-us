import { TranslucentCard } from './TranslucentCard';

export default {
  title: 'Components/Molecules/TranslucentCard',
  component: TranslucentCard
};

export const base = () => (
  <TranslucentCard payload={[{ title: 'title', label: 'label', active: false, link: '', icon: '' }]} />
);
