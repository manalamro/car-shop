import { useEffect, useState } from 'react';
// Custom hook to get the width of the screen
function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update width on resize
    window.addEventListener('resize', handleResize);
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
}


export default useScreenWidth;
