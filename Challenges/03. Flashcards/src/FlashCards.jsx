import { useState } from "react";
import FlashCard from "./FlashCard";

export default function FlashCards({ questions }) {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const selectFlashCard = (id) => {
    setSelectedQuestionId(id !== selectedQuestionId ? id : null);
  };

  return (
    <div className="flashcards">
      {questions.map((q) => {
        return (
          <FlashCard
            {...q}
            key={q.id}
            selectFlashCard={selectFlashCard}
            selectedQuestionId={selectedQuestionId}
          />
        );
      })}
    </div>
  );
}
