import React, { useState } from "react";
import { BackButton } from "../ui";
import { useVocab } from "./useVocab";
import { VocabPair } from "./VocabPair";
import { AddPair } from "./AddPair";
import { updateLessonVocababulary } from "../updateLesson";

export const VocabPage = () => {
  const { vocabPairs, isLoading, lessonId } = useVocab();
  const [showTranslation, setShowTranslation] = useState(false);
  const [editModeToggle, setEditModeToggle] = useState(false);

  const toggleShowHide = () => {
    setShowTranslation(!showTranslation);
  };

  const deleteRecord = async (recordId) => {
    const response = await fetch(
      `/delete-record/${lessonId}/vocabulary?recordId=${recordId}`
    );
    if (response.status != 200) {
      console.error(response);
    } else {
      alert("Record removed.");
      window.location.reload();
    }
  };

  const edit = () => {
    setEditModeToggle((editModeToggle) => !editModeToggle);
  };

  const addPair = (eng, esp) => {
    // TODO add wait and alert response / reoload
    updateLessonVocababulary(lessonId, eng, esp);
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
            <button className="vocab rowButton" onClick={edit}>
              Edit
            </button>
          </div>
          {vocabPairs.map((pair) => (
            <VocabPair
              eng={pair.eng}
              esp={pair.esp}
              id={pair._id}
              key={pair._id}
              delete={deleteRecord}
              show={showTranslation}
              edit={editModeToggle}
            />
          ))}
          {editModeToggle && <AddPair callback={addPair} />}
        </div>
      )}
    </div>
  );
};
