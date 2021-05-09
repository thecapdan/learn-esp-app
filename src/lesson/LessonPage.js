import React from "react";
import { useLesson } from "./useLesson";
import { BackButton, NavButton } from "../ui";

export const LessonPage = () => {
  const { lesson, isLoading: isLoadingLesson } = useLesson();

  return (
    <div className="page">
      <BackButton />
      <div className="centred-container">
        <h1>{lesson.intro}</h1>
        <div className="lesson-page-button-wrapper">
          <div className="btn-group special" role="group">
            <NavButton link="/" name="Home" />
            <NavButton link={`/vocabulary/${lesson.id}`} name="Vocabulary" />
            <NavButton link={`/exercise/${lesson.id}`} name="Exercise" />
            {/* <Link to={`/`} className="btn btn-default">
              <button type="button" className="navButton">
                Home
              </button>
            </Link>
            <Link to={`/vocabulary/${lesson.id}`} className="btn btn-default">
              <button type="button" className="navButton">
                Vocabulary
              </button>
            </Link>
            <Link to={`/exercise/${lesson.id}`} className="btn btn-default">
              <button type="button" className="navButton">
                Exercise
              </button>
            </Link> */}
          </div>

          {/* <Link to={`/exercise/${lesson.id}`}>
            <button
              type="button"
              className="lesson-page-button"
            >{`${lesson.name} Exercise`}</button>
          </Link>

          <Link to={`/`}>
            <button type="button" className="lesson-page-button">
              {"Home"}
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};
