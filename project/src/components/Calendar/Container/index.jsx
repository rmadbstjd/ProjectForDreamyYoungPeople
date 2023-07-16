import React, { useState, useEffect, createContext } from "react";
import { useImmer } from "use-immer";
import { format, addMonths, subMonths, addYears } from "date-fns";
import UICalendar from "../UICalendar";
import { setYear, setMonth, parse } from "date-fns";
import calendarStore from "../../../store/calendar";
export const CalendarContext = createContext();

const Container = () => {
  const { date, setDate, setIsOpenCalendar } = calendarStore();
  const [selectedDate, setSelectedDate] = useState(
    date !== "yyyy.mm.dd" ? parse(date, "yyyy.MM.dd", new Date()) : new Date()
  );
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectableYears, setSelectableYears] = useImmer([]);
  const [selectableMonths, setSelectableMonths] = useImmer([]);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  const handlePrevMonthClick = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };
  const handleNextMonthClick = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };
  const handleDateClick = (day) => {
    setSelectedDate(day);
    const formattedDate = format(day, "yyyy.MM.dd");
    setDate(formattedDate);
    setIsOpenCalendar();
  };
  const contextValue = {
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
  };

  useEffect(() => {
    const newYears = [];
    const newMonths = [];
    for (let i = -10; i <= 10; i++) {
      const year = format(addYears(selectedDate, i), "yyyy");
      if (!newYears.includes(year)) {
        newYears.push(year);
      }
    }
    setSelectableYears(newYears);
    for (let i = 1; i <= 12; i++) {
      newMonths.push(`${i}`);
    }
    setSelectableMonths(newMonths);
  }, []);

  useEffect(() => {
    if (selectedYear) {
      setSelectedDate(setYear(selectedDate, selectedYear));
    }
  }, [selectedYear]);

  useEffect(() => {
    if (selectedMonth) {
      setSelectedDate(setMonth(selectedDate, selectedMonth - 1));
    }
  }, [selectedMonth]);
  return (
    <>
      <CalendarContext.Provider value={contextValue}>
        <UICalendar />
      </CalendarContext.Provider>
    </>
  );
};

export default Container;
