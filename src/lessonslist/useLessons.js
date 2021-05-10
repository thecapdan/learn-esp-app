import { useState, useEffect } from "react";

export const useLessons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lessons, setLessons] = useState([]);

  const loadingLessons = async () => {
    setIsLoading(true);
    const response = await fetch("/all-lessons");
    const lessons = await response.json();
    const sortedLesson = lessons.sort((a, b) => (a.id > b.id ? 1 : -1));
    setLessons(sortedLesson);
    setIsLoading(false);
  };

  useEffect(() => {
    loadingLessons();
  }, []);

  return { isLoading, lessons, setLessons };
};
