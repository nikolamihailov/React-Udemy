import { useEffect } from "react";

export default function Timer({ dispatch, secondsLeft }) {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = Math.floor(secondsLeft % 60);
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {formatTime(minutes)}:{formatTime(seconds)}
    </div>
  );
}
