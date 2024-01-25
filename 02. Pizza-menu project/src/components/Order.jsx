export default function Order({ closingHour, openingHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openingHour}:00 to {closingHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
