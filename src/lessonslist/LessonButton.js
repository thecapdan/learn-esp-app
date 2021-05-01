import React from "react";
import { Link } from "react-router-dom";

export const LessonButton = (lesson) => {
  return (
    <div className="list-item">
      <Link to={`/lesson/${lesson.id}`}>
        <button>{`${lesson.id}: ${lesson.name}`}</button>
      </Link>
    </div>
  );
};
