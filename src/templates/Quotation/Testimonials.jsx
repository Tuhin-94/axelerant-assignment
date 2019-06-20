import React, { Component } from "react";
import Quotes from "./Quotes";

class Testimonials extends Component {
  render() {
    return (
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Testimonials
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table>
            <tr>
              <td
                style={{
                  display: "inline-block",
                  width: "150px",
                  justifyContent: "center",
                  border: "1px solid white",
                  backgroundColor: "#EAF9D0",
                  borderRadius: "0.9em"
                }}
              >
                {" "}
                <Quotes
                  name="Charlie"
                  text="Nor made to court an amorous looking-glass;
I, that am rudely stamp'd, and want love's majesty
To strut before a wanton ambling nymph;
I, that am curtail'd of this fair proportion,
"
                />{" "}
              </td>
              <td>
                {" "}
                <span style={{ display: "inline-block", width: "105px" }} />
              </td>
              <td
                style={{
                  display: "inline-block",
                  width: "150px",
                  justifyContent: "center",
                  border: "1px solid white",
                  backgroundColor: "#EAF9D0",
                  borderRadius: "0.9em"
                }}
              >
                {" "}
                <Quotes
                  name="Bond"
                  text="And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;"
                />{" "}
              </td>
              <td>
                {" "}
                <span style={{ display: "inline-block", width: "105px" }} />
              </td>
              <td
                style={{
                  display: "inline-block",
                  width: "150px",
                  justifyContent: "center",
                  border: "1px solid white",
                  backgroundColor: "#EAF9D0",
                  borderRadius: "0.9em"
                }}
              >
                {" "}
                <Quotes
                  name="Harry"
                  text="Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth'd his wrinkled front;"
                />{" "}
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Testimonials;
