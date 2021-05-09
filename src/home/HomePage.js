import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="page">
      <div className="centred-container">
        <h1>Welcome to Pigeon Spanish</h1>
        <div className="list-item">
          <Link to={`/lessons`}>
            <button>{"Lessons"}</button>
          </Link>
        </div>
        <div className="list-item">
          <Link to={`/update-lesson`}>
            <button>{"Edit Lesson"}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
