import React, { useState } from "react";

import { BackButton, Dropdown, RadioButton } from "../ui";
import {
  updateLessonIntro,
  updateLessonExercise,
  updateLessonVocababulary,
} from "./updateLesson";

const recordOptions = ["exercise", "vocabulary", "intro"];

export const UpdateLessonPage = () => {
  const [lessonId, setLessonNumber] = useState(0);
  const [record, setRecord] = useState(recordOptions[0]);
  const [intro, setIntro] = useState("");
  const [phraseEng, setPhraseEng] = useState("");
  const [phraseEsp, setPhraseEsp] = useState("");

  const update = async () => {
    if (record === "intro") {
      updateLessonIntro(lessonId, intro);
    } else if (record === "vocabulary") {
      updateLessonVocababulary(lessonId, phraseEng, phraseEsp);
    } else {
      updateLessonExercise(lessonId, phraseEng, phraseEsp);
    }
  };

  return (
    <div className="page">
      <BackButton />
      <div className="centred-container">
        <h1>Update Lesson</h1>
        {/* TODO get options from DB*/}
        <Dropdown
          className="full-width"
          onChange={(e) => setLessonNumber(e.target.value)}
          options={[0, 1, 2, 3, 4]}
        />
        <div className="radio-container">
          {recordOptions.map((recordOption, index) => {
            return (
              <RadioButton
                option={recordOption}
                callback={setRecord}
                current={record}
                key={index}
              />
            );
          })}
        </div>
        <div>
          {record === "intro" ? (
            <textarea
              type="string"
              placeholder="Enter new intro"
              className="full-width"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            ></textarea>
          ) : (
            <div>
              <input
                type="string"
                placeholder="Enter English phrase"
                className="full-width"
                value={phraseEng}
                onChange={(e) => setPhraseEng(e.target.value)}
              ></input>
              <input
                type="string"
                placeholder="Enter Spanish phrase"
                className="full-width"
                value={phraseEsp}
                onChange={(e) => setPhraseEsp(e.target.value)}
              ></input>
            </div>
          )}
        </div>
        <button className="full-width" onClick={update}>
          Update
        </button>
      </div>
    </div>
  );
};
