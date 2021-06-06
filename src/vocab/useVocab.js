import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useVocab = () => {
  // TODO - retrieve params more gracefully
  let urlParams = useLocation().pathname;
  let lessonId = urlParams.substring(urlParams.lastIndexOf("/") + 1);

  const [isLoading, setIsLoading] = useState(true);
  const [vocabPairs, setVocabPairs] = useState([]);
  //const [lessonId, setVocabPairs] = useState([]);

  const loadingVocab = async () => {
    setIsLoading(true);
    const response = await fetch(`/lesson/${lessonId}`);
    const lesson = await response.json();
    setVocabPairs(lesson.vocabulary);
    setIsLoading(false);
  };

  useEffect(() => {
    loadingVocab();
  }, []);

  return { isLoading, vocabPairs, lessonId };
};
