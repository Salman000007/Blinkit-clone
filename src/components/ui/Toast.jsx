import React, { useEffect } from "react";

const Toast = ({ message, onClose, duration = 2000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className=" mt-12 fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in">
      {message}
    </div>
  );
};

export default Toast;
