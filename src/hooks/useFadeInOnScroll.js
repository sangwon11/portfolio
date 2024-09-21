import { useRef, useState, useEffect } from 'react';

const useFadeInOnScroll = ({ fade = true, move = true } = {}) => {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const style = {
    opacity: fade ? (isInView ? 1 : 0) : 1,
    transform: move ? (isInView ? 'translateX(0)' : 'translateX(100px)') : 'none',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };

  return { elementRef, style };
};

export default useFadeInOnScroll;