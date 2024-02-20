export default function NextButton({
  dispatch,
  asnwer,
  currQuestionIdx,
  numQuestions,
}) {
  if (asnwer === null) return null;
  if (currQuestionIdx < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (currQuestionIdx === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
