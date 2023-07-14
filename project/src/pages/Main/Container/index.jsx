import React, { useState } from "react";
import UIMain from "../UIMain";
const Container = () => {
  const [checkedValue, setCheckedValue] = useState(null);
  return (
    <UIMain checkedValue={checkedValue} setCheckedValue={setCheckedValue} />
  );
};

export default Container;
