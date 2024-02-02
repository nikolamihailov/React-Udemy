export default function Bill({ bill, onBillChange }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="number"
        name="bill"
        id="bill"
        value={bill}
        onChange={onBillChange}
      />
    </div>
  );
}
