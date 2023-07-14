import React from "react";
import * as Style from "./styles";
import Menu from "../../../components/Menu";
import HorizonLine from "../../../components/HorizonLine";
import Input from "../../../components/input/text";
import Radio from "../../../components/input/radio";
const UIMain = ({ checkedValue, setCheckedValue }) => {
  console.log("c", checkedValue);
  return (
    <Style.Layout>
      <Style.SideMenu>
        <Menu></Menu>
        <Menu></Menu>
      </Style.SideMenu>
      <Style.Content>
        <Style.Header>타이틀</Style.Header>
        <HorizonLine width={"94.5%"} border={"1px"} margin={"32px"} />
        <Style.Form>
          <Style.Option>
            <Style.OptionTitle>정보1</Style.OptionTitle>
            <Style.DefaultValue>정보 내용</Style.DefaultValue>
          </Style.Option>
          <Style.Option>
            <Style.OptionTitle>정보2</Style.OptionTitle>
            <Input />
          </Style.Option>
          <Style.Option>
            <Style.OptionTitle>정보3</Style.OptionTitle>
            <Style.DefaultValue>정보 내용</Style.DefaultValue>
          </Style.Option>
          <Style.Option>
            <Style.OptionTitle>정보4</Style.OptionTitle>
            <Input />
          </Style.Option>
          <Style.Option>
            <Style.OptionTitle>날짜</Style.OptionTitle>
            <Style.Date>2023.07.15</Style.Date>
          </Style.Option>
          <Style.RadioOption>
            <Style.OptionTitle>정보5</Style.OptionTitle>
            <Style.RadioRightContainer>
              <Style.RadioContainer>
                <Radio
                  title={"선택1"}
                  checkedValue={checkedValue}
                  setCheckedValue={setCheckedValue}
                />
                <Radio
                  title={"선택2"}
                  checkedValue={checkedValue}
                  setCheckedValue={setCheckedValue}
                />
                <Radio
                  title={"선택3"}
                  checkedValue={checkedValue}
                  setCheckedValue={setCheckedValue}
                />
              </Style.RadioContainer>

              <Style.Text isShow={checkedValue === "선택3"}>
                * 선택시 텍스트가 표시됩니다.
              </Style.Text>
            </Style.RadioRightContainer>
          </Style.RadioOption>
        </Style.Form>
      </Style.Content>
    </Style.Layout>
  );
};

export default UIMain;
