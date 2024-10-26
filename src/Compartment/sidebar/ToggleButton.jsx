import React, { useState, useEffect } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  // Toggle dark mode class on the root element
  useEffect(() => {
    if (isOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isOn]);

  const toggle = () => setIsOn(!isOn);

  return (
    <div>
      <div
        onClick={toggle}
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-yellow-200" : "bg-gray-800"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleButton;
