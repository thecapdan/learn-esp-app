import React from "react";
import { LessonButton } from "./LessonButton";

export const LessonsList = ({ lessons, isLoading }) => {
  return (
    <div className="list-container">
      <h1>Lessons</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        lessons.map((lesson) => (
          <LessonButton name={lesson.name} id={lesson.id} key={lesson.id} />
        ))
      )}
    </div>
  );
};
