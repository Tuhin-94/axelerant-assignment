import React from "react";
import Buttons from "./Buttons";

function NavHead(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
        backgroundColor: "#f4414a",
        color: "White"
      }}
    >
      <Buttons name="Home" />
      <Buttons name="About" />
      <Buttons name="Contacts" />
      <span style={{ display: "inline-block", width: "800px" }} />
      <p
        style={{
          display: "flex",
          float: "right",
          fontWeight: "bold",
          right: "1000px",
          fontSize: "16px"
        }}
      >
        ABC Consultancy Services
      </p>
    </div>
  );
}

export default NavHead;
