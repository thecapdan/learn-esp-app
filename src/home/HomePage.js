import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome Home Jimbob</h1>
      <Link to={`/lessons`}>
        <button>{"Lessons"}</button>
      </Link>
      <Link to={`/update-lesson`}>
        <button>{"Edit Lesson"}</button>
      </Link>
    </div>
  );
};
