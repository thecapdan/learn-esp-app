import React from "react";
import { useLessons } from "./useLessons";
import { LessonsList } from "./LessonsList";
import { BackButton } from "../ui";

export const LessonsListPage = () => {
  const { lessons, isLoading: isLoadingLessons } = useLessons();

  return (
    <div className="page">
      <BackButton />
      <div className="centred-container">
        <div className="column">
          <LessonsList isLoading={isLoadingLessons} lessons={lessons} />
        </div>
      </div>
    </div>
  );
};
