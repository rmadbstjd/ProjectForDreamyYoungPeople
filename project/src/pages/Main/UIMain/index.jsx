import React from "react";
import * as Style from "./styles";
import Menu from "../../../components/Menu";
import HorizonLine from "../../../components/HorizonLine";
import Input from "../../../components/input/text";
import Radio from "../../../components/input/radio";
import Checkbox from "../../../components/input/checkBox";
const UIMain = ({
  checkedRadioValue,
  setCheckedRadioValue,
  checkedBoxValue,
  setCheckedBoxValue,
}) => {
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
            <Style.Date>yyyy.mm.dd</Style.Date>
          </Style.Option>
          <Style.RadioOption>
            <Style.OptionTitle>정보5</Style.OptionTitle>
            <Style.RadioRightContainer>
              <Style.RadioContainer>
                <Radio
                  title={"선택1"}
                  checkedRadioValue={checkedRadioValue}
                  setCheckedRadioValue={setCheckedRadioValue}
                />
                <Radio
                  title={"선택2"}
                  checkedRadioValue={checkedRadioValue}
                  setCheckedRadioValue={setCheckedRadioValue}
                />
                <Radio
                  title={"선택3"}
                  checkedRadioValue={checkedRadioValue}
                  setCheckedRadioValue={setCheckedRadioValue}
                />
              </Style.RadioContainer>

              <Style.Text isShow={checkedRadioValue === "선택3"}>
                * 선택시 텍스트가 표시됩니다.
              </Style.Text>
            </Style.RadioRightContainer>
          </Style.RadioOption>
          <Style.Option>
            <Style.OptionTitle>정보6</Style.OptionTitle>
            <Style.CheckboxContainer>
              <Checkbox
                title={"선택1"}
                checkedBoxValue={checkedBoxValue}
                setCheckedBoxValue={setCheckedBoxValue}
              />
              <Checkbox
                title={"선택2"}
                checkedBoxValue={checkedBoxValue}
                setCheckedBoxValue={setCheckedBoxValue}
              />
              <Checkbox
                title={"선택3"}
                checkedBoxValue={checkedBoxValue}
                setCheckedBoxValue={setCheckedBoxValue}
              />
            </Style.CheckboxContainer>
          </Style.Option>
        </Style.Form>
      </Style.Content>
    </Style.Layout>
  );
};

export default UIMain;
