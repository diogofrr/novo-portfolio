import { useState, useEffect, useRef } from 'react';

export const useObserver = (ref: React.RefObject<HTMLElement>) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTriggered) {
        setIsOnScreen(true);
        setHasTriggered(true);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasTriggered]);

  useEffect(() => {
    if (ref.current && observerRef.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isOnScreen;
};
