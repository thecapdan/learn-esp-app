import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { BackButton, Dropdown, RadioButton } from "../ui";

const recordOptions = ["exercise", "vocabulary", "intro"];

export const UpdateLessonPage = () => {
  const [lessonId, setLessonNumber] = useState(1);
  const [record, setRecord] = useState(recordOptions[0]);
  const [intro, setIntro] = useState("");
  const [phraseEng, setPhraseEng] = useState("");
  const [phraseEsp, setPhraseEsp] = useState("");
  const history = useHistory();

  const update = async () => {
    if ((record === "intro" && intro) || (phraseEng && phraseEsp)) {
      const lessonUpdate = {
        id: lessonId,
        record: record,
        intro: intro,
        phrase: {
          eng: phraseEng,
          esp: phraseEsp,
        },
      };
      await fetch("/update-lesson", {
        method: "post",
        body: JSON.stringify(lessonUpdate),
        headers: {
          "Content-Type": "application/json",
        },
      });
      history.push("/");
    } else {
      alert("Please update required fields");
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
          options={[1, 2]}
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
            <input
              type="string"
              placeholder="Enter new intro"
              className="full-width"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            ></input>
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
