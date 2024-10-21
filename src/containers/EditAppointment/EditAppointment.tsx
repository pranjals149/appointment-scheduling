import { useState } from "react";
import { EditAppointmentProps } from "../../types";
import { formatDate } from "../utils";

import "./EditAppointment.scss";

const EditAppointment: React.FC<EditAppointmentProps> = ({
  onClose,
  appointment,
  onSave,
  date,
  time,
}) => {
  const [title, setTitle] = useState(appointment.title);
  const [userName, setUserName] = useState(appointment.userName);
  const [email, setEmail] = useState(appointment.email);

  const handleSave = () => {
    if (title && userName && date && time && email) {
      const updatedAppointment = {
        ...appointment,
        title,
        date,
        time,
        userName,
        email,
      };
      onSave(updatedAppointment);
      onClose();
    }
  };

  return (
    <div className="edit-modal__container">
      <div className="edit-modal__content">
        <div className="edit-modal__date-time">
          <span className="edit-modal__date">{formatDate(date)}</span>
          <span className="edit-modal__time">{time}</span>
        </div>
        <div className="edit-modal__field">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="edit-modal__input"
          />
        </div>
        <div className="edit-modal__field">
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="edit-modal__input"
          />
        </div>
        <div className="edit-modal__field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="edit-modal__input"
          />
        </div>

        <div className="edit-modal__actions">
          <button onClick={handleSave} className="edit-modal__save-btn">
            Save
          </button>
          <button onClick={onClose} className="edit-modal__close-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAppointment;
