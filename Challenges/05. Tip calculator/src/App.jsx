import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import BillTotal from "./components/BillTotal";
import Reset from "./components/Reset";
import ServiceRating from "./components/ServiceRating";

function App() {
  const [bill, setBill] = useState("");
  const [serviceRatings, setServiceRatings] = useState({ mine: 0, friend: 0 });

  const handleBillChange = (e) => setBill(+e.target.value);
  const handleServiceRatingChange = (e, whose, percent) =>
    setServiceRatings((rs) => ({ ...rs, [whose]: percent }));

  const handleReset = () => {
    setBill(0);
    setServiceRatings({ mine: 0, friend: 0 });
  };

  return (
    <>
      <Bill bill={bill} onBillChange={handleBillChange} />
      <ServiceRating
        serviceRatings={serviceRatings}
        handleServiceRatingChange={handleServiceRatingChange}
        whose="mine"
      >
        <p>How did you like the service?</p>
      </ServiceRating>
      <ServiceRating
        serviceRatings={serviceRatings}
        handleServiceRatingChange={handleServiceRatingChange}
        whose="friend"
      >
        <p>How did your friend like the service?</p>
      </ServiceRating>
      {bill > 0 && (
        <>
          <Reset onReset={handleReset}>
            <span>Reset</span>
          </Reset>
          <BillTotal bill={bill} serviceRatings={serviceRatings} />
        </>
      )}
    </>
  );
}

export default App;
