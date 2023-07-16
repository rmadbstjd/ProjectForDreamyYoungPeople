import React, { useContext } from "react";
import { CalendarContext } from "../Container/index";
import * as Style from "./styles";
import Left from "../../../svg/Calendar/left.svg";
import Right from "../../../svg/Calendar/right.svg";
import Select from "../../../svg/Calendar/select.svg";
import Dropdown from "../Dropdown";
const Header = () => {
  const {
    format,
    selectedDate,
    handlePrevMonthClick,
    handleNextMonthClick,
    selectableYears,
    isYearDropdownOpen,
    setIsYearDropdownOpen,
    isMonthDropdownOpen,
    setIsMonthDropdownOpen,
    selectableMonths,
    setSelectedYear,
    setSelectedMonth,
  } = useContext(CalendarContext);
  return (
    <Style.HeaderContainer>
      <Style.PrevButton src={Left} onClick={handlePrevMonthClick} />
      <Style.YearContainer
        onClick={() => setIsYearDropdownOpen((prev) => !prev)}
      >
        <Style.Content width={"4.875rem"}>
          <div>{format(selectedDate, "yyyy")}년</div>
          <Style.SelectIcon src={Select} />
          {isYearDropdownOpen && (
            <Dropdown
              width={"6.25rem"}
              top={"2.188rem"}
              value={selectableYears}
              handleClick={setSelectedYear}
            />
          )}
        </Style.Content>
      </Style.YearContainer>
      <Style.MonthContainer
        onClick={() => setIsMonthDropdownOpen((prev) => !prev)}
      >
        <Style.Content width={"3rem"}>
          <div>{format(selectedDate, "M")}월</div>
          <Style.SelectIcon src={Select} />
          {isMonthDropdownOpen && (
            <Dropdown
              width={"4.5rem"}
              top={"3.313rem"}
              value={selectableMonths}
              handleClick={setSelectedMonth}
            />
          )}
        </Style.Content>
      </Style.MonthContainer>
      <Style.NextButton src={Right} onClick={handleNextMonthClick} />
    </Style.HeaderContainer>
  );
};

export default Header;
