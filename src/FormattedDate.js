import React from "react";

export default function FormattedDate(props) {
  console.log(props);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

//  let currentDate = date.getDate();

//  let monthIndex = date.getMonth();
//  let months = [
//    "Jan",
//    "Feb",
//    "Mar",
//    "Apr",
//    "May",
//    "Jun",
//    "Jul",
//    "Aug",
//    "Sep",
//    "Oct",
//    "Nov",
//    "Dec",
//  ];

//  let month = months[monthIndex];

//  let currentYear = date.getFullYear();



  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}

// {
//   currentDate;
// }
// {
//   month;
// }
// {
//   currentYear;
// }