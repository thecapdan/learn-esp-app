import React, { useState } from "react";

export const AddPair = (props) => {
  const [phraseEng, setPhraseEng] = useState("");
  const [phraseEsp, setPhraseEsp] = useState("");

  const addPair = () => {
    props.callback(phraseEng, phraseEsp);
  };

  return (
    <div className="btn-group special" role="group">
      <input
        className="vocab"
        onChange={(e) => setPhraseEng(e.target.value)}
      ></input>
      <input
        className="vocab"
        onChange={(e) => setPhraseEsp(e.target.value)}
      ></input>
      <button className="vocab rowButton" onClick={addPair}>
        {"+"}
      </button>
    </div>
  );
};
