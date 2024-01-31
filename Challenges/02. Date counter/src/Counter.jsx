import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [daysCount, setDaysCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + daysCount);

  const onReset = () => {
    setDaysCount(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <input
          type="range"
          step={1}
          min={0}
          max={10}
          name="step"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <label htmlFor="step">{step}</label>
      </div>
      <div>
        <button onClick={() => setDaysCount((d) => d - step)}>-</button>
        <input
          type="number"
          value={daysCount}
          onChange={(e) => setDaysCount(+e.target.value)}
        />
        <button onClick={() => setDaysCount((d) => d + step)}>+</button>
      </div>
      <br />
      <div>
        {daysCount === 0 && `Today is ${date.toDateString()}`}
        {daysCount > 0 && `${daysCount} days from today is: `}
        {daysCount < 0 && `${Math.abs(daysCount)} days ago was: `}
        {date.toDateString()}
      </div>
      {(daysCount !== 0 || step !== 1) && (
        <button onClick={onReset}>Reset</button>
      )}
    </div>
  );
};

export default Counter;
