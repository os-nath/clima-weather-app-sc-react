import React from "react";

export default function FormattedDate(props) {
  var showDate = props.date.format("dddd");

  var showDate2 = props.date.format("DD MMM Y");
  return (
    <div>
      {showDate}, {showDate2}
    </div>
  );
}
