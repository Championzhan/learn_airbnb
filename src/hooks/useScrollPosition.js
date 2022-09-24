import { useEffect, useState } from 'react';
import { throttle } from 'underscore';

export function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 200);

    window.addEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollX,
    scrollY
  };
}
