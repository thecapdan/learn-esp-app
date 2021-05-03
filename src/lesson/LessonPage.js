import React from "react";
import { Link } from "react-router-dom";
import { useLesson } from "./useLesson";
import { BackButton } from "../ui";

export const LessonPage = () => {
  const { lesson, isLoading: isLoadingLesson } = useLesson();

  return (
    <div className="page">
      <BackButton />
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
