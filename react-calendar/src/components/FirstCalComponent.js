import "../App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const FirstCalComponent = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <br />
      <h1 className="text-center">React Calendar</h1>
      <div className="calendar-container d-flex justify-content-center">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
};

export default FirstCalComponent;
