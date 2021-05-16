import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLesson = () => {
  // TODO - retrieve params more gracefully
  let urlParams = useLocation().pathname;
  let id = urlParams.substring(urlParams.lastIndexOf("/") + 1);

  const [isLoading, setIsLoading] = useState(true);
  const [lesson, setLesson] = useState({});
  const [hasExercise, setHasExercise] = useState(false);

  const loadingLesson = async () => {
    setIsLoading(true);
    const response = await fetch(`/lesson/${id}`);
    const lesson = await response.json();
    setLesson(lesson);
    setHasExercise(lesson.exercise.length > 0);
    setIsLoading(false);
  };

  useEffect((args) => {
    loadingLesson();
  }, []);

  return { isLoading, lesson, hasExercise };
};
