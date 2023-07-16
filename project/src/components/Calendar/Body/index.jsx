import React from "react";
import * as Style from "./styles";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { isSameDay, addDays } from "date-fns";
const Body = ({ selectedDate, handleDateClick }) => {
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <Style.Day onClick={() => handleDateClick(cloneDay)}>
          {isSameDay(day, selectedDate) ? (
            <Style.SelectedDay isValid={false}>
              {formattedDate}
            </Style.SelectedDay>
          ) : format(selectedDate, "M") !== format(day, "M") ? (
            <Style.Text isValid={false}>{formattedDate}</Style.Text>
          ) : (
            <Style.Text isValid={true}>{formattedDate}</Style.Text>
          )}
        </Style.Day>
      );
      day = addDays(day, 1);
    }
    rows.push(<Style.Week>{days}</Style.Week>);
    days = [];
  }
  return <Style.Layout>{rows}</Style.Layout>;
};

export default Body;
