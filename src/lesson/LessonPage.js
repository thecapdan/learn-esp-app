import React from "react";
import { Link } from "react-router-dom";
import { useLesson } from "./useLesson";

export const LessonPage = () => {
  const { lesson, isLoading: isLoadingLesson } = useLesson();

  return (
    <div>
      <h1>{lesson.intro}</h1>
      <Link to={`/exercise/${lesson.id}`}>
        <button>{`${lesson.name} Exercise`}</button>
      </Link>
      <br />
      <Link to={`/`}>
        <button>{"Home"}</button>
      </Link>
    </div>
  );
};
