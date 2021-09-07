import { memo } from 'react';

type ButtonProps = {
  primary: boolean;
  backgroundColor: string;
  size: string;
  label: string;
  onClick: () => void;
};
const Button = ({ primary, backgroundColor, size, label, ...props }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} {...props}>
      {label}
    </button>
  );
};

export default memo(Button);
