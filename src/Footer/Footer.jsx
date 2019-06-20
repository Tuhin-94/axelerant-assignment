import React, { Component } from "react";
import Buttons from "../templates/NavBar/Buttons";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#f4414a",
          color: "White",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <h3>ABC Consultancy Services </h3>
        <span style={{ width: "580px" }} />
        <div>
          <table>
            <tr>
              {" "}
              <td>
                {" "}
                <Buttons name="FB" />
              </td>{" "}
              <td>
                <Buttons name="Insta" />
              </td>{" "}
              <Buttons name="LinkedIN" />
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Footer;
