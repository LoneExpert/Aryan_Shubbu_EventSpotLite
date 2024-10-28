import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event_Modal from "./Event_Modal";

const Event_Sliders = ({ events }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const changes = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleEventClick=(event)=>{
    setisModalOpen(true);
    setSelectedEvent(event);
  }

  const handleClosemodel =()=>{
    setisModalOpen(false);
    setSelectedEvent(null);
  }

  return (
    <>
      <Slider {...changes}>
        {events.map((event) => (
          <div key={event.id} className="slider" onClick={()=>handleEventClick(event)}>  
            <img src={event.image} alt={event.name} className="w-full h-auto img-border2" />
            <p className="event_name text-xl text-white font-bold text-center">{event.name}</p>
            <p className="event_date text-white text-center">{event.date}</p>
            <p className="event_location text-white text-center">{event.location}</p>
          </div>
        ))}
      </Slider>
      <Event_Modal event={selectedEvent} isOpen={isModalOpen} onClose={handleClosemodel}/>
    </>
  );
};

export default Event_Sliders;
