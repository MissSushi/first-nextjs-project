import { useEffect, useState } from "react";

const MobileRecognizer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");

    const handler = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return <div>{isMobile ? "Isch bin Handy." : "Digga PC Master Race."}</div>;
};

export default MobileRecognizer;
