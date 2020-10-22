import { useEffect, useRef, useState } from 'react';

export default (thresholds = [0, 1]) => {
  
  const
  [viewRatio, setViewRatio] = useState(0),
  ref = useRef<Element>(null),
  
  observer = new IntersectionObserver(
    entry => {
      setViewRatio(entry[0].intersectionRatio);
    },
    thresholds as IntersectionObserverInit
  );
  
  useEffect(() => {
    if (ref.current) {
      const target = ref.current;
      observer.observe(target);
      return () => observer.unobserve(target);
    }
  }, [observer]);
  
  return [viewRatio, ref];
};