// import React, { useState, useEffect } from "react";
// import Hero_Section from "./Hero_Section";
// import Event_Sliders from "./Event_Sliders";
// import "../App.css";
// import Event_Modal from "./Event_Modal";

// const Event_List = () => {
//   const [allEvents, setAllEvents] = useState([]); 
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [isModalOpen, setisModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [showMobileSearch, setShowMobileSearch] = useState(false);

//   useEffect(() => {
//     fetch("/data/events.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setAllEvents(data); 
//       })
//       .catch((error) => console.log("Error fetching data: " + error));
//   }, []);

//   useEffect(() => {
//     if (searchQuery) {
//       const searchResults = allEvents.filter(
//         (event) =>
//           event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           event.location.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//       setFilteredEvents(searchResults);
//     } else {
//       setFilteredEvents([]); 
//     }
//   }, [searchQuery, allEvents]);

//   const handleEventClick=(event)=>{
//     setisModalOpen(true);
//     setSelectedEvent(event);
//   }

//   const handleClosemodel =()=>{
//     setisModalOpen(false);
//     setSelectedEvent(null);
//   }

  
//   const events2024 = allEvents.filter(
//     (event) => new Date(event.date).getFullYear() === 2024
//   );

//   return (
//     <div className="pt-4 pl-4">
//       <div className="flex flex-wrap">
//         <div className="pr-4">
//           <img className="w-20 h-20" src="/assets/logo.png" alt="logo" />
//         </div>
//         <div className="pr-4">
//           <p className="text-3xl pt-8 navbarbar-text fade-in">EventSpot Lite</p>
//         </div>
//         <div className="flex-grow pl-80 pt-8">
//           <input
//             className="w-2/3 text-1xl p-1 rounded-lg focus:outline-none"
//             placeholder="Search for events by name or location"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>

//       <Hero_Section />

//       {searchQuery && filteredEvents.length > 0 && (
//         <div className="search-results">
//           {filteredEvents.map((event) => (
//             <div key={event.id} className="search-result-item" onClick={()=>handleEventClick(event)}>
//               <p className="font-bold text-lg">Your Searched Result: </p>
//               <p className="mt-2 text-base search-text-name">{event.name}</p>
//               <img src={event.image} alt={event.name} className="img-border1"/>
//               <p className="text-base ">{event.date}</p>
//               <p className="text-sm">{event.location}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <Event_Modal event={selectedEvent} isOpen={isModalOpen} onClose={handleClosemodel}/>

      
//       <div className="ml-10 mr-10 mt-20 all-event-annimation">
//         <p className="text-2xl font-bold text-white mb-4">All Events</p>
//         <div className="all-events-grid">
//           {allEvents.map((event) => (
//             <div key={event.id} className="event-item" onClick={()=>handleEventClick(event)}>
//               <p className="font-bold">{event.name}</p>
//               <img className="img-border1" src={event.image} alt={event.name} />
//               <p className="">{event.date}</p>
//               <p>{event.location}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Event_Modal event={selectedEvent} isOpen={isModalOpen} onClose={handleClosemodel}/>

//       <div className="ml-10 mr-10 mt-20">
//         <p className="text-2xl font-bold text-white mb-4">Upcoming this year</p>
//         <Event_Sliders events={events2024} />
//       </div>
//     </div>
//   );
// };

// export default Event_List;

import React, { useState, useEffect } from "react";
import Hero_Section from "./Hero_Section";
import Event_Sliders from "./Event_Sliders";
import "../App.css";
import Event_Modal from "./Event_Modal";

const Event_List = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showMobileSearch, setShowMobileSearch] = useState(false); // New state for mobile search visibility

  useEffect(() => {
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => {
        setAllEvents(data);
      })
      .catch((error) => console.log("Error fetching data: " + error));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const searchResults = allEvents.filter(
        (event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredEvents(searchResults);
    } else {
      setFilteredEvents([]);
    }
  }, [searchQuery, allEvents]);

  const handleEventClick = (event) => {
    setIsModalOpen(true);
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const events2024 = allEvents.filter(
    (event) => new Date(event.date).getFullYear() === 2024
  );

  return (
    <div className="pt-4 pl-4">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <img className="w-20 h-20" src="/assets/logo.png" alt="logo" />
          <p className="text-3xl pl-4 navbar-text fade-in">EventSpot Lite</p>
        </div>

        {/* Desktop Search Input */}
        <div className="hidden lg:flex flex-grow justify-end pr-10">
          <input
            className="w-2/3 p-1 text-lg rounded-lg focus:outline-none"
            placeholder="Search for events by name or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Menu Button for Mobile Search */}
        <div className="flex lg:hidden pr-4">
          <button onClick={() => setShowMobileSearch(!showMobileSearch)}>
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.75 6.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm.75 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="flex lg:hidden p-4">
          <input
            className="w-full p-2 text-lg rounded-lg focus:outline-none"
            placeholder="Search for events by name or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      <Hero_Section />

      {searchQuery && filteredEvents.length > 0 && (
        <div className="search-results">
          {filteredEvents.map((event) => (
            <div key={event.id} className="search-result-item" onClick={() => handleEventClick(event)}>
              <p className="font-bold text-lg">Your Searched Result:</p>
              <p className="mt-2 text-base search-text-name">{event.name}</p>
              <img src={event.image} alt={event.name} className="img-border1" />
              <p className="text-base ">{event.date}</p>
              <p className="text-sm">{event.location}</p>
            </div>
          ))}
        </div>
      )}
      
      <Event_Modal event={selectedEvent} isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className="ml-10 mr-10 mt-20 all-event-animation">
        <p className="text-2xl font-bold text-white mb-4">All Events</p>
        <div className="all-events-grid">
          {allEvents.map((event) => (
            <div key={event.id} className="event-item" onClick={() => handleEventClick(event)}>
              <p className="font-bold">{event.name}</p>
              <img className="img-border1" src={event.image} alt={event.name} />
              <p className="">{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ml-10 mr-10 mt-20">
        <p className="text-2xl font-bold text-white mb-4">Upcoming this year</p>
        <Event_Sliders events={events2024} />
      </div>
    </div>
  );
};

export default Event_List;
