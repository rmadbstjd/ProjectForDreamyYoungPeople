import React from "react";
import * as Style from "./styles";
import Menu from "../../../components/Menu";
import HorizonLine from "../../../components/HorizonLine";
import Input from "../../../components/input/text";
import Radio from "../../../components/input/radio";
import Checkbox from "../../../components/input/checkBox";
import Calendar from "../../../components/Calendar/Container";
import calendarStore from "../../../store/calendar";
import Button from "../../../components/Button";
const UIMain = ({
  checkedRadioValue,
  setCheckedRadioValue,
  checkedBoxValue,
  setCheckedBoxValue,
}) => {
  const { date, isOpenCalendar, setIsOpenCalendar } = calendarStore();
  return (
    <Style.Container>
      <Style.SideContainer>
        <Menu></Menu>
        <Menu></Menu>
      </Style.SideContainer>
      <Style.MainContent>
        <Style.Header>타이틀</Style.Header>
        <HorizonLine width={"94.5%"} border={"1px"} margin={"2rem"} />
        <Style.FormContainer>
          <Style.Section>
            <Style.SectionTitle>정보1</Style.SectionTitle>
            <Style.DefaultValue>정보 내용</Style.DefaultValue>
          </Style.Section>
          <Style.Section>
            <Style.SectionTitle>정보2</Style.SectionTitle>
            <Input />
          </Style.Section>
          <Style.Section>
            <Style.SectionTitle>정보3</Style.SectionTitle>
            <Style.DefaultValue>정보 내용</Style.DefaultValue>
          </Style.Section>
          <Style.Section>
            <Style.SectionTitle>정보4</Style.SectionTitle>
            <Input />
          </Style.Section>
          <Style.CalendarSection>
            <Style.SectionTitle>날짜</Style.SectionTitle>
            <Style.Date
              isDefault={date === "yyyy.mm.dd" ? true : false}
              onClick={() => {
                setIsOpenCalendar();
              }}
            >
              {date}
            </Style.Date>
          </Style.CalendarSection>
          <Style.Calendar>{isOpenCalendar && <Calendar />}</Style.Calendar>

          <Style.RadioSection>
            <Style.SectionTitle>정보5</Style.SectionTitle>
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
          </Style.RadioSection>
          <Style.Section>
            <Style.SectionTitle>정보6</Style.SectionTitle>
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
          </Style.Section>
          <HorizonLine width={"94.5%"} border={"1px"} margin={"2rem"} />
          <Style.ButtonContainer>
            <Button
              style={{
                width: "4.625rem",
                height: "2.5rem",
                borderRadius: "0.313rem",
                color: "white",
                background: "#024eee",
                hoverBackground: "#003ad6",
              }}
            >
              저장
            </Button>
          </Style.ButtonContainer>
        </Style.FormContainer>
      </Style.MainContent>
    </Style.Container>
  );
};

export default UIMain;
