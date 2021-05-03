import React from "react";

export const RadioButton = (props) => {
  return (
    <div className="RadioButton">
      <label>
        <input
          type="radio"
          name="test"
          value={props.option}
          checked={props.current === props.option}
          onChange={() => props.callback(props.option)}
        />
        {props.option}
      </label>
    </div>
  );
};
