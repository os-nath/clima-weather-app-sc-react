import React from "react";

export default function FormattedDate(props) {
  var showDate =
    props.date.format("dddd") + "," + " " + props.date.format("DD MMM Y");

  return <div>{showDate}</div>;
}
