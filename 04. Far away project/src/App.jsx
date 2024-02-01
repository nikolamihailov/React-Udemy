import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
 */
function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems(() => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((i) => i.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  };

  const handleClearList = () => {
    const doesUserWantToDelete = confirm(
      "Are you sure you want to clear your list?"
    );
    if (doesUserWantToDelete) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
