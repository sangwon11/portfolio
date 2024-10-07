import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('customCursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      id="customCursor"
      className="w-8 h-8 bg-blue-500 rounded-full fixed top-0 left-0 pointer-events-none transition-transform duration-200 ease-out transform scale-75"
    ></div>
  );
};

export default CustomCursor;
