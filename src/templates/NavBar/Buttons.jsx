import React from "react";

function Buttons(props) {
  return (
    <div>
      {" "}
      <div style={{ float: "right", right: "0px", position: "absolute" }}>
        {props.children}
      </div>
      <button
        style={{
          display: "inline-block",
          float: "right",
          color: "#ffffff",
          backgroundColor: "#f4414a",
          padding: "0.5em 1em",
          border: "solid 1px transparent",
          borderRadius: "2px"
        }}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Buttons;
