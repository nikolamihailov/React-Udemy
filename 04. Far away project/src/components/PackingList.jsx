import Item from "./Item";

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.length > 0 ? (
          items.map((item) => {
            return <Item {...item} key={item.id} />;
          })
        ) : (
          <p>No Items.</p>
        )}
      </ul>
    </div>
  );
}
