import "../App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DefaultValueComponent = () => {
  const [date, setDate] = useState([
    new Date(2021, 6, 1),
    new Date(2021, 6, 10),
  ]);

  return (
    <div>
      <div className="app">
        <h1 className="text-center">Enabling Default Value</h1>
        <div className="calendar-container d-flex justify-content-center">
          <Calendar onChange={setDate} selectRange={true} defaultValue={date} />
          {/* <span className="bold">Selected Date: {date}</span> */}
        </div>
      </div>
    </div>
  );
};

export default DefaultValueComponent;
