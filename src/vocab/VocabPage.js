import React, { useState } from "react";
import { BackButton } from "../ui";
import { useVocab } from "./useVocab";
import { VocabPair } from "./VocabPair";

export const VocabPage = () => {
  const { vocabPairs, isLoading } = useVocab();
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleShowHide = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="page">
      <BackButton />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="centred-container">
          <div className="btn-group special" role="group">
            <button className="vocab"></button>
            <button className="vocab" onClick={toggleShowHide}>
              {showTranslation ? "Hide All" : "Show All"}{" "}
            </button>
          </div>
          {vocabPairs.map((pair) => (
            <VocabPair eng={pair.eng} esp={pair.esp} show={showTranslation} />
          ))}
        </div>
      )}
    </div>
  );
};
