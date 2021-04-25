import { useState, useEffect } from "react";

export const useLessons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lessons, setLessons] = useState([]);

  const loadingLessons = async () => {
    setIsLoading(true);
    const response = await fetch("/all-lessons");
    const lessons = await response.json();
    setLessons(lessons);
    setIsLoading(false);
  };

  useEffect(() => {
    loadingLessons();
  }, []);

  return { isLoading, lessons, setLessons };
};
