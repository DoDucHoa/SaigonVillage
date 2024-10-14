import { useState, useEffect } from "react";

function useDeviceType() {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initial check
    updateDeviceType();

    // Add event listener
    window.addEventListener("resize", updateDeviceType);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
}

export default useDeviceType;
