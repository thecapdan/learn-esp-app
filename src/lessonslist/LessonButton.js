import React from "react";
import { Link } from "react-router-dom";

export const LessonButton = (lesson) => {
  return (
    <div className="list-item">
      <Link to={`/lesson/${lesson.id}`}>
        <h3>{`${lesson.id}: ${lesson.name}`}</h3>
      </Link>
    </div>
  );
};
