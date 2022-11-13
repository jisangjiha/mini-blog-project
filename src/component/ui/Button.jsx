import React from "react";
import "./Button.css";

function Button(props) {
  const { title, onClick } = props;
  return (
    <button className="StyledButton" onClick={onClick}>
      {" "}
      {title || "button"}
    </button>
  );
}

export default Button;
