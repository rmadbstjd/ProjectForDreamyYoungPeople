import React, { useState } from "react";
import * as Style from "./styles";
import active from "../../../svg/RadioBtn/active.svg";
import hover from "../../../svg/RadioBtn/hover.svg";
import defaults from "../../../svg/RadioBtn/default.svg";

const Radio = ({ title, checkedRadioValue, setCheckedRadioValue }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleRadioBtn = () => {
    setCheckedRadioValue(title);
  };

  return (
    <Style.Layout>
      <input
        type="radio"
        checked={checkedRadioValue === title}
        id={title}
        style={{ display: "none" }} // 기존의 라디오 버튼 숨김
        onChange={handleRadioBtn}
      />
      <Style.CustomRadio
        htmlFor={title}
        isChecked={checkedRadioValue === title}
        background={
          checkedRadioValue === title ? active : isHovered ? hover : defaults
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <Style.Label isChecked={checkedRadioValue === title} htmlFor={title}>
        {title}
      </Style.Label>
    </Style.Layout>
  );
};

export default Radio;
