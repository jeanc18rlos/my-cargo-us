import { useState, useEffect } from 'react';

const getWidth = () =>
  typeof window !== `undefined`
    ? window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    : 1024;

const useCurrentWidth = () => {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId: any = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
};

export default useCurrentWidth;
