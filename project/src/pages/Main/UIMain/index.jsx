import React from "react";
import * as Style from "./styles";
import Menu from "../../../components/Menu";
const UIMain = () => {
  return (
    <Style.Layout>
      <Style.SideMenu>
        <Menu></Menu>
        <Menu></Menu>
      </Style.SideMenu>
      <Style.Content>
        <Style.Header>타이틀</Style.Header>
      </Style.Content>
    </Style.Layout>
  );
};

export default UIMain;
