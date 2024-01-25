import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closingHour={closingHour} openingHour={openingHour} />
      ) : (
        <>
          <i>{new Date().toLocaleTimeString()}</i>
          <p>
            We are happy to welcome you between {openingHour}:00 and{" "}
            {closingHour}
            :00.
          </p>
        </>
      )}
    </footer>
  );
}
