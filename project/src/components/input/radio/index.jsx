import React, { useState } from "react";
import * as Style from "./styles";
import active from "../../../svg/RadioBtn/active.svg";
import hover from "../../../svg/RadioBtn/hover.svg";
import defaults from "../../../svg/RadioBtn/default.svg";

const Radio = ({ title, checkedValue, setCheckedValue }) => {
  console.log("checkedValue", checkedValue);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleRadioBtn = () => {
    setCheckedValue(title);
  };

  return (
    <Style.Layout>
      <input
        type="radio"
        checked={checkedValue === title}
        id={title}
        style={{ display: "none" }} // 기본 라디오 버튼 숨김
        onChange={handleRadioBtn}
      />
      <Style.CustomRadio
        htmlFor={title}
        isChecked={checkedValue === title}
        background={
          checkedValue === title ? active : isHovered ? hover : defaults
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <Style.Label isChecked={checkedValue === title} htmlFor={title}>
        {title}
      </Style.Label>
    </Style.Layout>
  );
};

export default Radio;
