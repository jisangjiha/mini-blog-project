import React from "react";
import "./TextInput.css";

function TextInput(props) {
  const { height, value, onChange } = props;
  return (
    <textarea
      className="StyledTextarea"
      height={height}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
