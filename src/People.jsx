import React from "react";

import Person from "./components/Person";

import model1 from "./img/model-1.jpg";
import model2 from "./img/model-2.jpg";
import model3 from "./img/model-3.jpg";

export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {
        imgPath: model2,
        name: "Lara",
        age: "22"
      }
      // people: [
      //   {
      //     imgPath: model1,
      //     name: "Lara",
      //     age: "22"
      //   },
      //   {
      //     imgPath: model2,
      //     name: "Sandra",
      //     age: "18"
      //   },
      //   {
      //     imgPath: model3,
      //     name: "Emma",
      //     age: "24"
      //   }
      // ]
    };
  }

  render() {
    return (
      <div>
        <Person
          imgPath={this.state.people.imgPath}
          name={this.state.people.name}
          age={this.state.people.age}
        />
      </div>
    );
  }
}
