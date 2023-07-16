import React from "react";
import * as Style from "./styles";
import unFoldInActiveIcon from "../../svg/UnFold/inActive.svg";
import foldActiveIcon from "../..//svg/Fold/active.svg";

const MenuHeader = ({ active, handleArrowButton }) => {
  return (
    <Style.Layout active={active}>
      <Style.Content>
        <Style.Text active={active}>대메뉴</Style.Text>
        <Style.Img
          src={active ? foldActiveIcon : unFoldInActiveIcon}
          alt="fold"
          onClick={handleArrowButton}
        ></Style.Img>
      </Style.Content>
    </Style.Layout>
  );
};

export default MenuHeader;
