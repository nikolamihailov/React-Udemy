export default function PizzaItem({
  name,
  photoName,
  ingredients,
  price,
  soldOut,
}) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : "$" + price.toFixed(2)}</span>
      </div>
    </li>
  );
}
