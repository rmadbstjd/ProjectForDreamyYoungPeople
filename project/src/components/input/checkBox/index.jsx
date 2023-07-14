import React, { useState } from "react";
import * as Style from "./styles";
import active from "../../../svg/CheckboxBtn/active.svg";
import hover from "../../../svg/CheckboxBtn/hover.svg";
import defaults from "../../../svg/CheckboxBtn/default.svg";
const Checkbox = ({ title, checkedBoxValue, setCheckedBoxValue }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckbox = (isChecked, title) => {
    if (isChecked) setCheckedBoxValue((prev) => [...prev, title]);
    else setCheckedBoxValue(checkedBoxValue.filter((el) => el !== title));
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <Style.Layout>
      <input
        type="checkbox"
        id={`checkbox${title}`}
        style={{ display: "none" }} // 기존의 라디오 버튼 숨김
        onChange={(e) => {
          handleCheckbox(e.target.checked, title);
        }}
      />
      <Style.CustomCheckbox
        htmlFor={`checkbox${title}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        background={
          checkedBoxValue.includes(title)
            ? active
            : isHovered
            ? hover
            : defaults
        }
      />
      <Style.Label htmlFor={`checkbox${title}`}>{title}</Style.Label>
    </Style.Layout>
  );
};

export default Checkbox;
