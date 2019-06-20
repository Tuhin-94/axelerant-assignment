import React, { Component } from "react";
import Tailtext from "./Tailtext";

class Bodytail extends Component {
  buttonHandler = () => {
    alert("Feedback Submitted");
  };
  render() {
    const styling = {
      display: "inline-block",
      width: "125px",
      justifyContent: "center"
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIaEFMjepBgfAUylKvXcRKfsghlJqEDxhu8R8gGNhWmpKltkcEw"
        />
        <table style={{ position: "absolute", zIndex: "999" }}>
          <tr style={{ display: "flex", justifyContent: "center" }}>
            <td style={{ display: "flex", justifyContent: "center" }}>
              <h1 style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                Connect with Us
              </h1>
            </td>
          </tr>
          <tr style={{ display: "flex", justifyContent: "center" }}>
            <td style={styling}>
              <Tailtext name="FullName" />{" "}
            </td>{" "}
            <td>
              <span style={{ display: "inline-block", width: "50px" }} />
            </td>
            <td style={styling}>
              <Tailtext name="E-mail Address" />{" "}
            </td>{" "}
            <span style={{ display: "inline-block", width: "50px" }} />
            <td style={styling}>
              <Tailtext name="Phone Number" />{" "}
            </td>{" "}
            <span style={{ display: "inline-block", width: "50px" }} />
          </tr>
          {/* <tr style={{ display: "flex", justifyContent: "center" }}>
            <td>
              <Tailtext
                name="Message in brief"
                style={{ width: "38", height: "200px" }}
              />
            </td>
          </tr> */}
          {/* <Tailtext
            name="Message in brief"
            style={{ width: "200px", height: "200px" }}
          /> */}
          <tr style={{ display: "flex", justifyContent: "center" }}>
            <td>
              {" "}
              <textarea rows="6" cols="50" />{" "}
            </td>
          </tr>
          <tr style={{ display: "flex", justifyContent: "center" }}>
            <td style={styling} />
            <td style={styling}>
              {" "}
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                  backgroundColor: "#ff4000",
                  borderRadius: "1em"
                }}
                type="Submit"
                onClick={this.buttonHandler}
              >
                Submit
              </button>
            </td>
            <td style={styling} />
          </tr>
        </table>
      </div>
    );
  }
}

export default Bodytail;
