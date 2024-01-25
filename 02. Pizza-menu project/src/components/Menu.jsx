import { pizzaData } from "../data/data";
import PizzaItem from "./PizzaItem";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((p) => {
          return <PizzaItem {...p} key={p.name} />;
        })}
      </ul>
    </main>
  );
}
