import React, { useState } from "react";
import { daysOfWeek } from "../../containers/constants";
import { useCalendarContext } from "../../context/CalendarContext";
import { WeeklyCalendarProps } from "../../types";
import Modal from "../Modal/Modal";
import { generateTimeSlots, getCurrentWeekDates } from "./utils";

import "./weeklyCalendar.scss";

const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({
  appointments,
  bookAppointment,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } =
    useCalendarContext();

  const weekDates = getCurrentWeekDates(currentWeekStart);
  const timeSlots = generateTimeSlots();

  const goToNextWeek = () => {
    const nextWeek = new Date(currentWeekStart);
    nextWeek.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(nextWeek);
  };

  const goToPreviousWeek = () => {
    const prevWeek = new Date(currentWeekStart);
    prevWeek.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(prevWeek);
  };

  const openModal = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTimeClick = (date: string, time: string) => {
    openModal(date, time);
  };

  const isBooked = (date: string, time: string): boolean => {
    return appointments.some(
      (appt) => appt.date === date && appt.time === time
    );
  };

  const isCurrentWeek = (): boolean => {
    const currentDate = new Date();
    const currentWeek = getCurrentWeekDates(currentDate);
    return currentWeek[0] === weekDates[0];
  };

  return (
    <>
      <div className="calendar__navigation">
        <button
          className={`calendar__nav-btn ${
            isCurrentWeek() ? "calendar__nav-btn-disabled" : ""
          }`}
          onClick={goToPreviousWeek}
          disabled={isCurrentWeek()}
        >
          Previous Week
        </button>
        <button className="calendar__nav-btn" onClick={goToNextWeek}>
          Next Week
        </button>
      </div>

      <div className="calendar__container">
        <div className="calendar__grid-header">
          <div className="calendar__time-label" />
          {weekDates.map((date, index) => (
            <div key={date} className="calendar__day-label">
              {daysOfWeek[index]} <br /> {date}
            </div>
          ))}
        </div>

        <div className="calendar__grid-body">
          {timeSlots.map((time) => (
            <React.Fragment key={time}>
              <div className="calendar__time-label">{time}</div>
              {weekDates.map((date) => (
                <div
                  key={`${date}-${time}`}
                  className={`calendar__time-slot ${
                    isBooked(date, time) ? "calendar__booked" : ""
                  }`}
                  onClick={() =>
                    !isBooked(date, time) && handleTimeClick(date, time)
                  }
                >
                  {isBooked(date, time) ? "Booked" : "Available"}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onSubmit={bookAppointment}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        )}
      </div>
    </>
  );
};

export default WeeklyCalendar;
