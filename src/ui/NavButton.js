import React from "react";
import { Link } from "react-router-dom";

export const NavButton = (props) => {
  return (
    <Link to={props.link} className="btn btn-default">
      <button type="button" className="navButton">
        {props.name}
      </button>
    </Link>
  );
};