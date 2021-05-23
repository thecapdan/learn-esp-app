import React, { useState } from "react";

export const VocabPair = (props) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const hideShowToggle = () => {
    setShowTranslation(!showTranslation);
  };

  const deletePair = () => {
    props.delete(props.id);
  };

  return (
    <div className="btn-group special" role="group">
      <button className="vocab">{props.eng}</button>

      <button className="vocab" onClick={hideShowToggle}>
        {props.show || showTranslation ? props.esp : "show"}
      </button>
      <button className="vocab delete" onClick={deletePair}>
        {"X"}
      </button>
    </div>
  );
};
