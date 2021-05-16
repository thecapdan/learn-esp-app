import React, { useState } from "react";

export const VocabPair = (props) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const hideShowToggle = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="btn-group special" role="group">
      <button className="vocab">{props.eng}</button>
      <button className="vocab" onClick={hideShowToggle}>
        {props.show || showTranslation ? props.esp : "show"}
      </button>
    </div>
  );
};
