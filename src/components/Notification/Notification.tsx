import React, { useEffect } from "react";
import { NotificationProps } from "../../types";
import "./Notification.scss";

const Notification: React.FC<NotificationProps> = ({
  message,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className={`notification ${isVisible ? "visible" : ""}`}>
      {React.isValidElement(message) ? message : <span>{message}</span>}
    </div>
  );
};

export default Notification;
