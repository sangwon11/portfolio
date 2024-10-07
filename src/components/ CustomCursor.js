import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setCursorPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.1, // 부드러운 이동 효과
          y: prev.y + dy * 0.1,
        };
      });

      requestAnimationFrame(followCursor);
    };

    followCursor();
  }, [position]);

  return (
    <div
      id="customCursor"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
      className="z-10 w-12 h-12 bg-white fixed pointer-events-none mix-blend-difference rounded-full transform -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
};

export default CustomCursor;

