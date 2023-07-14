import React, { useState } from "react";
import UIMain from "../UIMain";
const Container = () => {
  const [checkedRadioValue, setCheckedRadioValue] = useState(null);
  const [checkedBoxValue, setCheckedBoxValue] = useState([]);
  return (
    <UIMain
      checkedRadioValue={checkedRadioValue}
      setCheckedRadioValue={setCheckedRadioValue}
      checkedBoxValue={checkedBoxValue}
      setCheckedBoxValue={setCheckedBoxValue}
    />
  );
};

export default Container;
