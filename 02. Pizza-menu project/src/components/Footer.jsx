export default function Footer() {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  return (
    <footer className="footer">
      <i>{new Date().toLocaleTimeString()}</i>
      <p>We are currently {isOpen ? "open" : "closed"}</p>
    </footer>
  );
}
