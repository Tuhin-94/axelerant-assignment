import React from "react";

function Icons(props) {
  return (
    <div style={{ float: "center", border: "10px" }}>
      {props.children}
      <img
        style={{ height: "100px", width: "125px", float: "center" }}
        src={props.path}
      />
      <p style={{ float: "center", align: "center" }}>{props.name}</p>
    </div>
  );
}

export default Icons;
