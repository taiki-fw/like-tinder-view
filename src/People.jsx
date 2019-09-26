import React from "react";
import styled from "styled-components";

import "./People.css"; //transitionのためのCSS
import Person from "./components/Person";
import { NopeBtn, LikeBtn, JumpToUserInfo } from "./components/ActionBtn";

import model1 from "./img/model-1.jpg";
import model2 from "./img/model-2.jpg";
import model3 from "./img/model-3.jpg";

const peopleData = [
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
];

// nope,likeボタンを押した際にカードの移動アニメーション時間
const animationTime = 2000;

const PeopleStyle = styled.div`
  position: relative;
  z-index: 1;
  height: 256px;
  width: 85%;
  margin: 0 auto;
`;

const UserActionsStyle = styled.div`
  width: 85%;
  margin: 40px auto 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  > button {
    display: inline-block;
    width: 48.75px;
    height: 48.75px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 50%;
  }

  > button:nth-child(2) {
    margin: 0 2em;
  }
`;

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
    this.firstPeople = React.createRef();
  }

  handleAction(e) {
    const isLikeAction = e.currentTarget.name;
    const newItem = this.state.people.slice(1); // 表示されていたカードを削除した新しいpeopleデータ
    const obj = this.firstPeople.current; // 表示されているpeopleのnode
    obj.classList.add(isLikeAction);
    setTimeout(() => {
      obj.classList.remove(isLikeAction);
      this.setState({
        isLike: isLikeAction,
        people: newItem
      });
    }, animationTime);
  }

  render() {
    const item = this.state.people.map((item, index) => (
      <Person
        ref={index === 0 ? this.firstPeople : ""}
        animationTimePerMillisecond={animationTime}
        key={index}
        imgPath={item.imgPath}
        name={item.name}
        age={item.age}
      />
    ));
    return (
      <>
        <PeopleStyle>{item}</PeopleStyle>
        <UserActionsStyle>
          <NopeBtn clickFunc={this.handleAction.bind(this)} />
          <JumpToUserInfo />
          <LikeBtn clickFunc={this.handleAction.bind(this)} />
        </UserActionsStyle>
      </>
    );
  }
}
