import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useExercise = () => {
  // TODO - retrieve params more gracefully
  let urlParams = useLocation().pathname;
  let id = urlParams.substring(urlParams.lastIndexOf("/") + 1);

  const [isLoading, setIsLoading] = useState(true);
  const [exercises, setExercise] = useState([]);

  const loadingExercise = async () => {
    setIsLoading(true);
    const response = await fetch(`/lesson/${id}`);
    const lesson = await response.json();
    setExercise(lesson.exercise);
    setIsLoading(false);
  };

  useEffect((args) => {
    loadingExercise();
  }, []);

  return { isLoading, exercises, setExercise };
};
