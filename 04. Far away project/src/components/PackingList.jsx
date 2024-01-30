import Item from "./Item";

export default function PackingList({ initialItems }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}
