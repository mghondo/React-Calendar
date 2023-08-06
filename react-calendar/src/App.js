import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FirstCalComponent from "./components/FirstCalComponent";
import RangeCalComponent from "./components/RangeCalComponent";
import DefaultValueComponent from "./components/DefaultValueComponent";
import DecadeView from "./components/DecadeView";

function App() {
  return (
    <div className="App">
      <FirstCalComponent />
      <br />
      <RangeCalComponent />
      <br />
      <DefaultValueComponent />
      <br />
      <DecadeView />
    </div>
  );
}

export default App;
