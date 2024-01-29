import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [daysCount, setDaysCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + daysCount);

  const stepIncr = () => setStep((s) => s + 1);
  const stepDecr = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <div>
      <div>
        <button onClick={stepDecr}>-</button>Steps: {step}{" "}
        <button onClick={stepIncr}>+</button>
      </div>
      <div>
        <button onClick={() => setDaysCount((d) => d - step)}>-</button>Count:{" "}
        {daysCount}{" "}
        <button onClick={() => setDaysCount((d) => d + step)}>+</button>
      </div>
      <br />
      <div>
        {daysCount === 0 && `Today is ${date.toDateString()}`}
        {daysCount > 0 && `${daysCount} days from today is: `}
        {daysCount < 0 && `${Math.abs(daysCount)} days ago was: `}
        {date.toDateString()}
      </div>
    </div>
  );
};

export default Counter;
