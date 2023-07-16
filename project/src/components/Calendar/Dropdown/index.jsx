import React from "react";
import * as Style from "./styles";
const Dropdown = ({ width, top, value, handleClick }) => {
  return (
    <Style.Dropdown width={width} top={top}>
      {value.map((li) => (
        <Style.List
          onClick={() => {
            handleClick(li);
          }}
        >
          <span>{li}</span>
        </Style.List>
      ))}
    </Style.Dropdown>
  );
};

export default Dropdown;
