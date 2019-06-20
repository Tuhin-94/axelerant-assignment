import React from "react";
import Icons from "./Icons";

function Body() {
  const styling = {
    display: "inline-block",
    width: "125px",
    justifyContent: "center",
    border: "1px solid #f4414a"
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "Black",
        color: "#f4414a"
      }}
    >
      <img
        style={{ height: "500px", width: "1400px" }}
        src="https://previews.123rf.com/images/edhar/edhar1711/edhar171102523/90084581-blurred-image-of-business-people-standing-in-office-business-background.jpg"
      />
      <table style={{ position: "absolute", zIndex: "999" }}>
        <tr>
          <td>
            <h1> Et harum quidem rerum facilis est et expedita distinctio.</h1>
          </td>
        </tr>

        <tr style={{ display: "flex", justifyContent: "center" }}>
          <td style={styling}>
            {" "}
            <Icons
              path="https://media.istockphoto.com/vectors/business-handshake-pixel-perfect-single-line-icon-vector-id935695242"
              name="Contract"
            />
          </td>
          <td>
            <span style={{ display: "inline-block", width: "5px" }} />
          </td>
          <td style={ styling }>
            {" "}
            <Icons
              name="Meeting"
              path="https://st2.depositphotos.com/3333565/10667/v/950/depositphotos_106677378-stock-illustration-business-meeting-single-icon.jpg"
            />
          </td>
          <td>
            <span style={{ display: "inline-block", width: "5px" }} />
          </td>
          <td style={styling}>
            {" "}
            <Icons
              name="Startup"
              path="https://graphicriver.img.customer.envatousercontent.com/files/182502358/preview.jpg?auto=format&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=96dc0d12027c542f0e165ec5f8e3274d"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Body;
