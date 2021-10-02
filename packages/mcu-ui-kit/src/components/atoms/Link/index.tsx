import React, { HTMLProps, ReactNode } from 'react';

export const Link = (props: { to: string; children: ReactNode } & HTMLProps<any>) => {
  const { to, children, ...rest } = props;
  return (
    <a {...rest} onClick={() => alert(to)}>
      {children}
    </a>
  );
};
