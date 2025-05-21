import { LOCATION } from "@/lib/data";
import { useEffect, useState } from "react";

export const useGetTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: LOCATION.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(now);
    };

    const timerId = setInterval(updateClock, 1000);
    updateClock();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return time;
};
