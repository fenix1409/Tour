import { useState, useEffect } from "react";
import React from "react";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(formattedDate);
    };

    updateTime(); // Dastlab chaqirish
    const interval = setInterval(updateTime, 1000); // Har soniyada yangilash

    return () => clearInterval(interval);
  }, []);

  return <h1>{currentTime}</h1>;
};

export default DateTimeDisplay;