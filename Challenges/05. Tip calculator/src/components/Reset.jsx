export default function Reset({ children, onReset }) {
  return <button onClick={onReset}>{children}</button>;
}
