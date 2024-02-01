export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list :)</em>
      </footer>
    );

  const packedItems = items.filter((i) => i.packed).length;
  const percentPackedItems = Math.round((packedItems / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPackedItems === 100
          ? "You packed everything, ready to go!"
          : `You have ${items.length} items on your list and you have already packed ${packedItems} (${percentPackedItems}%)`}
      </em>
    </footer>
  );
}
