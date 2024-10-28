import React, { useEffect, useState } from "react";
import "../Style/Event_Modal.css";

const Event_Modal = ({ event, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible || !event) return null; 

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""} modal-open-annimation`} onClick={onClose} >
      <div
        className={`modal ${isOpen ? "modal-open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="24"
            height="24" 
            fill="currentColor"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-2 mt-2">{event.name}</h2>
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-auto mb-4 img-border1"
        />
        <p><span className="font-bold">Description-: </span>{event.description}</p>
      </div>
    </div>
  );
};

export default Event_Modal;
