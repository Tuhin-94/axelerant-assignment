import React, { Component } from "react";

class HeadBody extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <b style={{ float: "left", left: "100px" }}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </b>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repella
              </p>
            </td>
            <td>
              <span style={{ display: "inline-block", width: "50px" }} />
            </td>
            <td>
              <img
                style={{ float: "right", height: "300px", width: "800px" }}
                src="https://previews.123rf.com/images/mishabokovan/mishabokovan1612/mishabokovan161200013/68634625-world-map-dots-black-points-earth-vector-illustration.jpg"
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default HeadBody;
