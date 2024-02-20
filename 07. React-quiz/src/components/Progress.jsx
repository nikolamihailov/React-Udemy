export default function Progress({
  currQuestionIdx,
  numQuestions,
  points,
  totalPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={currQuestionIdx + Number(answer !== null)}
      />
      <p>
        Question <strong>{currQuestionIdx + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}
