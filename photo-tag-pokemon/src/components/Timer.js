import React from 'react';
import { useEffect } from 'react';

const Timer = ({seconds, setSeconds}) => {
  

  const getTime = () => {
    setSeconds(seconds => seconds+1);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
         {formatTime(seconds)}
    </div>
  );
};
export function formatTime(time) {
	const seconds = `0${Math.round(time % 60)}`.slice(-2);
	const minutes = `${Math.floor(time / 60)}`;
	const showMinutes = `0${minutes % 60}`.slice(-2);
	const hours = `0${Math.floor(time / 3600)}`.slice(-2);
	return `${hours}:${showMinutes}:${seconds}`;
}
export default Timer;