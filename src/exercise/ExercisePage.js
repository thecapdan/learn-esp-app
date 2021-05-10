import React, { useState } from "react";
import { BackButton } from "../ui";

import { useExercise } from "./useExercise";
import { findDifferences } from "../utils";

export const ExercisePage = () => {
  const { exercises, isLoading: isLoadingExercise } = useExercise();
  const [index, setIndex] = useState(0);
  const [inProgress, setInProgress] = useState(true);
  const [result, setResult] = useState("pending");
  const [userAnswer, setUserAnswer] = useState("");

  const proceed = () => {
    if (inProgress) {
      setResult(getInputOutcome());
      setInProgress(false);
    } else {
      nextPhrase();
      setResult("pending");
    }
  };

  const getInputOutcome = () => {
    return userAnswer.toLowerCase() === exercises[index].esp.toLowerCase()
      ? "correct"
      : "incorrect";
  };

  const nextPhrase = () => {
    const nextIndex = index + 1 < exercises.length ? index + 1 : 0;
    setIndex(nextIndex);
    setUserAnswer("");
    setInProgress(true);
  };

  const getPlaceholder = (str) => {
    let placeholder = "";
    [...str].forEach((letter) => (placeholder += letter === " " ? " " : "_"));
    return placeholder;
  };

  const hint = () => {};

  return (
    <div className="page">
      <BackButton />
      <div className="centred-container">
        <h1>Exercise</h1>
        {isLoadingExercise ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="list-item">
              <p className="exercise-phrase">{exercises[index].eng}</p>
            </div>
            <div className="list-item">
              <p className="exercise-phrase">
                {inProgress
                  ? getPlaceholder(exercises[index].esp)
                  : exercises[index].esp}
              </p>
            </div>
            <div className="list-item">
              <input
                value={userAnswer}
                className={`full-width ${result}`}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="btn-group special" role="group">
          <button onClick={hint} className="game-button">
            {"Hint"}
          </button>
          <button
            onClick={nextPhrase}
            className="game-button"
            disabled={!inProgress}
          >
            {"Skip"}
          </button>
          <button onClick={proceed} className="game-button">
            {inProgress ? "Enter" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};
