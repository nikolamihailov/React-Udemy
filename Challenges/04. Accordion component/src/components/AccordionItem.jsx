import { useState } from "react";

export default function Accordionitem({ title, num, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={isOpen ? "item open" : "item"}
      onClick={() => setIsOpen((is) => !is)}
    >
      <p className="number">{num <= 9 ? "0" + num : num}</p>
      <h2 className="title">{title}</h2>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
}
