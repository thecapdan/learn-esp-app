import React from "react";
import { Link } from "react-router-dom";
import { useExercise } from "./useExercise";

export const ExercisePage = () => {
  const { exercise, isLoading: isLoadingExercise } = useExercise();

  return (
    <div>
      <h1>{exercise}</h1>

      <br />
      <Link to={`/`}>
        <button>{"Home"}</button>
      </Link>
    </div>
  );
};
