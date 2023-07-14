import React, { useState } from "react";
import * as Style from "./styles";
import Header from "../MenuHeader";
import List from "../MenuList";
const Menu = () => {
  const [active, setActive] = useState(false);
  const handleArrowButton = () => {
    setActive((prev) => !prev);
  };
  return (
    <Style.Layout active={active}>
      <Header active={active} handleArrowButton={handleArrowButton} />

      {active === true ? (
        <>
          <List />
          <List />
        </>
      ) : null}
    </Style.Layout>
  );
};

export default Menu;
