import "../App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DecadeView = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1 className="text-center">Decade View</h1>
      <div className="calendar-container d-flex justify-content-center">
        <Calendar onChange={setDate} selectRange={true} defaultView="decade" />
      </div>
    </div>
  );
};

export default DecadeView;
