import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useExercise } from "./useExercise";

export const ExercisePage = () => {
  const { exercises, isLoading: isLoadingExercise } = useExercise();
  const [index, setIndex] = useState(0);

  const nextPair = () => {
    const nextIndex = index + 1 < exercises.length ? index + 1 : 0;
    setIndex(nextIndex);
  };

  return (
    <div className="page">
      <div className="centred-container">
        <h1>Exercise</h1>
        {isLoadingExercise ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>{exercises[index].eng}</p>
            <p>{exercises[index].esp}</p>
          </div>
        )}

        <button onClick={nextPair}>{"Next"}</button>

        <br />
        <Link to={`/`}>
          <button>{"Home"}</button>
        </Link>
      </div>
    </div>
  );
};
