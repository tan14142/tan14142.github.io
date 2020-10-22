import { useEffect, useState } from 'react';

declare var ResizeObserver: any;

export default (ref: HTMLElement | null) => {
  const [dimensions, setDimensions] = useState<DOMRect>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
    toJSON: () => {}
  });

  useEffect(() => {
    if (ref) {
      const
      setter = () => setDimensions(() => ref.getClientRects()[0]),
      resizeObserver = new ResizeObserver((entry: any[]) => {
        entry.forEach(setter);
      });

      window.addEventListener('orientationchange', setter, false);
      resizeObserver.observe(ref);
      
      setter();

      return () => {
        window.removeEventListener('orientationchange', setter);
        resizeObserver.unobserve(ref);
      };
    }
  }, [ref]);

  return dimensions;
};
