import React from "react";
import * as Style from "./styles";
const Days = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <Style.Layout>
      {days.map((day) => (
        <Style.Date>{day}</Style.Date>
      ))}
    </Style.Layout>
  );
};

export default Days;
