import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLesson = () => {
  // TODO - retrieve params more gracefully
  let urlParams = useLocation().pathname;
  let id = urlParams.substring(urlParams.lastIndexOf("/") + 1);

  const [isLoading, setIsLoading] = useState(true);
  const [lesson, setLesson] = useState({});

  const loadingLesson = async () => {
    setIsLoading(true);
    const response = await fetch(`/lesson/${id}`);
    const lesson = await response.json();
    setLesson(lesson);
    setIsLoading(false);
  };

  useEffect((args) => {
    loadingLesson();
  }, []);

  return { isLoading, lesson, setLesson };
};
