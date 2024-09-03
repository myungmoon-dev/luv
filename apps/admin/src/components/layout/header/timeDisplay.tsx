import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("YYYY-MM-DD HH:mm:ss"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span className="text-sm text-zinc-300">{currentTime}</span>;
};

export default TimeDisplay;
