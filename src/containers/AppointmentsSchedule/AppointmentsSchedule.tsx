import React, { useState } from "react";
import Notification from "../../components/Notification/Notification";
import WeeklyCalendar from "../../components/WeeklyCalendar/WeeklyCalendar";
import { useCalendarContext } from "../../context/CalendarContext";
import { Appointment, AppointmentScheduleProps } from "../../types";
import { formatDate } from "../utils";

import "./appointments.scss";

const AppointmentsSchedule: React.FC<AppointmentScheduleProps> = ({
  appointments,
  setAppointments,
}) => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const { title, userName, email, selectedDate, selectedTime } =
    useCalendarContext();

  const handleNotificationClose = () => {
    setIsNotificationVisible(false);
  };

  const bookAppointment = (newAppointment: Appointment) => {
    const isTaken = appointments.some(
      (appt) =>
        appt.date === newAppointment.date && appt.time === newAppointment.time
    );

    if (!isTaken) {
      setAppointments((prev) => [...prev, newAppointment]);
      setIsNotificationVisible(true);
    }
  };

  const renderNotification = (
    <div className="notification__content">
      <span className="notification__heading">
        Appointment has been scheduled.
      </span>

      <div className="notification__body">
        <span className="notification__item">Title: {title}</span>
        <span className="notification__item">Username: {userName}</span>
        <span className="notification__item">Email: {email}</span>
        <span className="notification__item">
          Date: {formatDate(selectedDate)}
        </span>
        <span className="notification__item">Time: {selectedTime}</span>
      </div>
    </div>
  );

  return (
    <div className="appointment__scheduler">
      <WeeklyCalendar
        appointments={appointments}
        bookAppointment={bookAppointment}
      />

      {isNotificationVisible && (
        <Notification
          message={renderNotification}
          isVisible={isNotificationVisible}
          onClose={handleNotificationClose}
        />
      )}
    </div>
  );
};

export default AppointmentsSchedule;
