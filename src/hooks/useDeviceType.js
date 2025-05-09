import { useState, useEffect, useCallback } from "react";

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function useDeviceType() {
  const [deviceType, setDeviceType] = useState("desktop");

  const updateDeviceType = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setDeviceType("mobile");
    } else if (width >= 768 && width <= 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  useEffect(() => {
    // Initial check
    updateDeviceType();

    // Create debounced version of the update function
    const debouncedUpdate = debounce(updateDeviceType, 250);

    // Add event listener
    window.addEventListener("resize", debouncedUpdate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      debouncedUpdate.cancel?.(); // Cancel any pending debounced calls
    };
  }, [updateDeviceType]);

  return deviceType;
}

export default useDeviceType;
