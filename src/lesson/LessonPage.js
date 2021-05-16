import React from "react";
import { useLesson } from "./useLesson";
import { BackButton, NavButton } from "../ui";
import ReactMarkdown from "react-markdown";

export const LessonPage = () => {
  const { lesson, isLoading, hasExercise } = useLesson();

  return (
    <div className="page">
      <BackButton />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="centred-container">
          <ReactMarkdown>{lesson.intro}</ReactMarkdown>
          <div className="lesson-page-button-wrapper">
            <div className="btn-group special" role="group">
              <NavButton link="/" name="Home" />
              <NavButton link={`/vocabulary/${lesson.id}`} name="Vocabulary" />
              <NavButton
                link={`/exercise/${lesson.id}`}
                disabled={!hasExercise}
                name="Exercise"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
