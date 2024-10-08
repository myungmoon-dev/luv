import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span className="text-sm text-zinc-500 dark:text-zinc-300">{currentTime}</span>;
};

export default TimeDisplay;
