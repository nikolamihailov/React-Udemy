import Accordionitem from "./AccordionItem";

export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((f, idx) => {
        return <Accordionitem {...f} num={idx + 1} key={f.title} />;
      })}
    </div>
  );
}
