import React, { useEffect } from "react";
import { formatDate } from "../../containers/utils";
import { ModalProps } from "../../types";
import "./Modal.scss";
import { useCalendarContext } from "../../context/CalendarContext";

const Modal: React.FC<ModalProps> = ({
  onClose,
  onSubmit,
  selectedDate,
  selectedTime,
}) => {
  const { title, setTitle, userName, setUserName, email, setEmail } =
    useCalendarContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && userName && email) {
      onSubmit({
        id: Date.now(),
        date: selectedDate,
        time: selectedTime,
        title,
        userName,
        email,
      });
      onClose();
    }
  };

  useEffect(() => {
    setTitle("");
    setUserName("");
    setEmail("");
  }, []);

  return (
    <div className="modal__container">
      <div className="modal__content">
        <div className="modal__date-time">
          <span className="appointment__date">
            Date: {formatDate(selectedDate)}
          </span>
          <span className="appointment__time">Time: {selectedTime}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal__field">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="modal__input"
              placeholder="Enter title"
            />
          </div>
          <div className="modal__field">
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="modal__input"
              placeholder="Enter name"
            />
          </div>
          <div className="modal__field">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="modal__input"
              placeholder="Enter email"
            />
          </div>
          <div className="modal__actions">
            <button type="submit">Schedule</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
