import React, { useContext } from "react";
import Header from "../Header";
import Days from "../Days";
import Body from "../Body";
import * as Style from "./styles";
import { CalendarContext } from "../Container/index";
const UICalendar = () => {
  const {
    selectedDate,
    setSelectedDate,
    selectableYears,
    setSelectableYears,
    isYearDropdownOpen,
    setIsYearDropdownOpen,
    isMonthDropdownOpen,
    setIsMonthDropdownOpen,
    selectableMonths,
    handlePrevMonthClick,
    handleNextMonthClick,
    handleDateClick,
    format,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
  } = useContext(CalendarContext);
  return (
    <Style.Container>
      <CalendarContext.Provider
        value={{
          selectedDate,
          setSelectedDate,
          selectableYears,
          setSelectableYears,
          isYearDropdownOpen,
          setIsYearDropdownOpen,
          isMonthDropdownOpen,
          setIsMonthDropdownOpen,
          selectableMonths,
          handlePrevMonthClick,
          handleNextMonthClick,
          handleDateClick,
          format,
          selectedYear,
          setSelectedYear,
          selectedMonth,
          setSelectedMonth,
        }}
      >
        <Header />
        <Days />
        <Body selectedDate={selectedDate} handleDateClick={handleDateClick} />
      </CalendarContext.Provider>
    </Style.Container>
  );
};

export default UICalendar;
