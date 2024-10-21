import React from "react";
import { AppointmentCardProps } from "../../types";
import "./Card.scss";
import { formatDate } from "../../containers/utils";

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  onEditClick,
  onDeleteClick,
}) => {
  const { id, date, time, title, userName, email } = appointment;

  return (
    <div className="appointment__card">
      <div className="appointment__date-time">
        <span className="appointment__date">{formatDate(date)}</span>
        <span className="appointment__time">{time}</span>
      </div>
      <span className="appointment__title">{title}</span>

      <span className="appointment__userName">Name: {userName}</span>
      <span className="appointment__email">Email: {email}</span>

      <div className="appointment__actions">
        <button
          className="appointment__edit-btn"
          onClick={() => onEditClick(appointment)}
        >
          Edit appointment
        </button>
        <button
          className="appointment__delete-btn"
          onClick={() => onDeleteClick(id)}
        >
          Delete appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
