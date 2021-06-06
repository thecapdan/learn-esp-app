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
      {props.edit ? (
        <button className="vocab rowButton" onClick={deletePair}>
          {"X"}
        </button>
      ) : (
        <button className="vocab rowButton"></button>
      )}
    </div>
  );
};
