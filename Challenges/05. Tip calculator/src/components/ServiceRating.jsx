export default function ServiceRating({
  children,
  whose,
  serviceRatings,
  handleServiceRatingChange,
}) {
  return (
    <div>
      {children}
      <select
        name="serviceRating"
        id="serviceRating"
        value={serviceRatings[whose]}
        onChange={(e) => handleServiceRatingChange(e, whose, +e.target.value)}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely incredible (20%)</option>
      </select>
    </div>
  );
}
