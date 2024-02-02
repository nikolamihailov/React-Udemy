export default function BillTotal({ bill, serviceRatings }) {
  const tipPercent =
    Object.values(serviceRatings).reduce((acc, cur) => acc + cur, 0) / 2;

  if (tipPercent === 0) {
    return <h2>You pay ${bill}</h2>;
  }

  const tipValue = (tipPercent / 100) * bill;
  return (
    <h2>
      You pay ${bill + tipValue} (${bill} + ${tipValue} tip)
    </h2>
  );
}
