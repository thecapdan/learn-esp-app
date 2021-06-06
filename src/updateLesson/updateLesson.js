const updateLesson = async (lessonUpdate) => {
  const response = await fetch("/update-lesson", {
    method: "post",
    body: JSON.stringify(lessonUpdate),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const message =
    response.status === 200
      ? "Record successfully added"
      : "Failed to update. Server error";

  alert(message);
};

export const updateLessonIntro = (lessonId, intro) => {
  if (!lessonId || !intro) {
    alert("Please update required fields");
    return;
  }

  const lessonUpdate = {
    id: lessonId,
    record: "intro",
    intro: intro,
  };

  updateLesson(lessonUpdate);
};

export const updateLessonExercise = (lessonId, phraseEng, phraseEsp) => {
  if (!lessonId || !phraseEng || !phraseEsp) {
    alert("Please update required fields");
    return;
  }
  const lessonUpdate = {
    id: lessonId,
    record: "exercise",
    phrase: {
      eng: phraseEng,
      esp: phraseEsp,
    },
  };

  updateLesson(lessonUpdate);
};

export const updateLessonVocababulary = (lessonId, phraseEng, phraseEsp) => {
  if (!lessonId || !phraseEng || !phraseEsp) {
    alert("Please update required fields");
    return;
  }
  const lessonUpdate = {
    id: lessonId,
    record: "vocabulary",
    phrase: {
      eng: phraseEng,
      esp: phraseEsp,
    },
  };

  updateLesson(lessonUpdate);
};
