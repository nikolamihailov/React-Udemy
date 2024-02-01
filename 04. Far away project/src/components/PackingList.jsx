import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === "packed")
    sortedItems = [...items].sort(
      (a, b) => Number(b.packed) - Number(a.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => {
            return (
              <Item
                {...item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            );
          })
        ) : (
          <p>No Items.</p>
        )}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
