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

  const deleteRecord = async (id) => {
    const response = await fetch(`/delete-record/4/vocabulary?recordId=${id}`);
    if (response.status != 200) {
      console.error(response);
    } else {
      alert("Record removed.");
      window.location.reload();
    }
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
            <button className="vocab delete"></button>
          </div>
          {vocabPairs.map((pair) => (
            <VocabPair
              eng={pair.eng}
              esp={pair.esp}
              id={pair._id}
              delete={deleteRecord}
              show={showTranslation}
            />
          ))}
        </div>
      )}
    </div>
  );
};
