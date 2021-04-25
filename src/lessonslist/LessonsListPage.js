import React from "react";
import { useLessons } from "./useLessons";
import { LessonsList } from "./LessonsList";

export const LessonsListPage = () => {
  const { lessons, isLoading: isLoadingLessons } = useLessons();

  return (
    <div className="page-container">
      <div className="column">
        <LessonsList isLoading={isLoadingLessons} lessons={lessons} />
      </div>
    </div>
  );
};
