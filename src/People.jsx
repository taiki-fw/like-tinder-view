import React from "react";

import Person from "./components/Person";

import model1 from "./img/model-1.jpg";
import model2 from "./img/model-2.jpg";
import model3 from "./img/model-3.jpg";

export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          imgPath: model1,
          name: "Lara",
          age: "22"
        },
        {
          imgPath: model2,
          name: "Sandra",
          age: "18"
        },
        {
          imgPath: model3,
          name: "Emma",
          age: "24"
        }
      ]
    };
  }

  render() {
    const item = this.state.people.map((item, index) => (
      <Person
        key={index}
        imgPath={item.imgPath}
        name={item.name}
        age={item.age}
      />
    ));
    return (
      <>
        <div style={style.People}>{item}</div>
      </>
    );
  }
}

const style = {
  People: {
    position: "relative",
    zIndex: "1",
    height: "256px",
    width: "85%",
    margin: "0 auto"
  }
};
