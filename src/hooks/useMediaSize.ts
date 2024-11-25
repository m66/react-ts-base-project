import { useState, useEffect } from "react";

function useMediaSize() {
  const [media, setMedia] = useState(getMedia());

  function getMedia() {
    const width = window.innerWidth;
    return {
      isMobile: width < 480,
      isTablet: width >= 480 && width < 768,
      isSmallDesktop: width >= 768 && width < 992,
      isDesktop: width >= 992 && width < 1200,
      isLargeDesktop: width >= 1200 && width < 1400,
      isExtraLargeDesktop: width >= 1400,
      currentSize:
        width < 480
          ? "xs"
          : width >= 480 && width < 768
          ? "sm"
          : width >= 768 && width < 992
          ? "md"
          : width >= 992 && width < 1200
          ? "lg"
          : width >= 1200 && width < 1400
          ? "xl"
          : "xxl",
    };
  }

  useEffect(() => {
    function handleResize() {
      setMedia(getMedia());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return media;
}

export default useMediaSize;
