import React, { memo } from "react";

type CardProps = {
  children: React.ReactNode;
}

const Card = ({
  children,
}:CardProps) => (
  <div>
    {children}
  </div>
);

export default memo(Card);
