// import React, { useState } from "react";
// import Calendar from "react-calendar";

// const disabledRanges = [
//   [in3Days, in5Days],
//   [in13Days, in15Days],
// ];

// function tileDisabled({ date, view }) {
//   // Add class to tiles in month view only
//   if (view === "month") {
//     // Check if a date React-Calendar wants to check is within any of the ranges
//     return isWithinRanges(date, disabledRanges);
//   }
// }

// function DisableSelectTiles() {
//   const [date, onChange] = useState(now);

//   return (
//     <Calendar onChange={onChange} value={date} tileDisabled={tileDisabled} />
//   );
// }

// export default DisableSelectTiles;
