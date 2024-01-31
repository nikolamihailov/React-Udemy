import { useEffect, useState } from "react";

export default function FlashCard({
  id,
  question,
  answer,
  selectFlashCard,
  selectedQuestionId,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(selectedQuestionId === id);
  }, [selectedQuestionId, id]);

  const handleClick = () => {
    selectFlashCard(id);
  };

  return (
    <div onClick={handleClick} className={isFlipped ? "selected" : "flashcard"}>
      {isFlipped ? answer : question}
    </div>
  );
}
