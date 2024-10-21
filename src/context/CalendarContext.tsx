import React, { createContext, useContext, useState } from "react";
import { CalendarContextType } from "../types";

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        title,
        setTitle,
        userName,
        setUserName,
        email,
        setEmail,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider"
    );
  }
  return context;
};
