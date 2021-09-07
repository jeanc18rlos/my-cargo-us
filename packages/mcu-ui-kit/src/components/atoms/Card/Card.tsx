import { memo, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => <div>{children}</div>;

export default memo(Card);
