import React, { useState } from "react";
import AppointmentCard from "../../components/Card/Card";
import Notification from "../../components/Notification/Notification";
import { useCalendarContext } from "../../context/CalendarContext";
import { Appointment, AppointmentScheduleProps } from "../../types";
import EditAppointment from "../EditAppointment/EditAppointment";

import "./viewAppointments.scss";

const ViewAppointments: React.FC<AppointmentScheduleProps> = ({
  appointments,
  setAppointments,
}) => {
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditNotificationVisible, setIsEditNotificationVisible] =
    useState(false);

  const { selectedDate, selectedTime, setSelectedDate, setSelectedTime } =
    useCalendarContext();

  const handleNotificationClose = () => {
    setIsEditNotificationVisible(false);
  };

  const handleUpdateAppointment = (updatedDetails: Appointment) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === updatedDetails.id ? updatedDetails : appointment
      )
    );
    setIsEditNotificationVisible(true);
    setIsModalOpen(false);
  };

  const handleEditAppointment = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setSelectedDate(appointment.date);
    setSelectedTime(appointment.time);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedAppointment(null);
    setIsModalOpen(false);
  };

  const handleDeleteAppointment = (id: number) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
  };

  const renderNotification = (
    <div className="notification__content">
      Appointment has been edited successfully.
    </div>
  );

  return (
    <div className="appointments__list-container">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onEditClick={handleEditAppointment}
          onDeleteClick={handleDeleteAppointment}
        />
      ))}

      {isModalOpen && (
        <EditAppointment
          onClose={handleClose}
          appointment={selectedAppointment!}
          onSave={handleUpdateAppointment}
          date={selectedDate}
          time={selectedTime}
        />
      )}

      {isEditNotificationVisible && (
        <Notification
          message={renderNotification}
          isVisible={isEditNotificationVisible}
          onClose={handleNotificationClose}
        />
      )}
    </div>
  );
};

export default ViewAppointments;
