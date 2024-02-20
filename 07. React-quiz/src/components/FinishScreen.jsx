export default function FinishScreen({ points, totalPoints, highscore }) {
  const finalPercent = Math.ceil((points / totalPoints) * 100);
  let emoji;
  if (finalPercent === 100) emoji = "🥇";
  if (finalPercent >= 80 && finalPercent < 100) emoji = "🎉";
  if (finalPercent >= 50 && finalPercent < 80) emoji = "🙃";
  if (finalPercent >= 0 && finalPercent < 50) emoji = "🤨";
  if (finalPercent === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({finalPercent}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}
