import React from "react";
import styled from "styled-components";

import { Person } from "./components/Person";
import { NopeBtn, LikeBtn, JumpToUserInfo } from "./components/ActionBtn";

import model1 from "./img/model-1.jpg";
import model2 from "./img/model-2.jpg";
import model3 from "./img/model-3.jpg";

export const peopleData = [
  {
    id: 1,
    imgPath: model1,
    name: "Lara",
    age: "22"
  },
  {
    id: 2,
    imgPath: model2,
    name: "Sandra",
    age: "18"
  },
  {
    id: 3,
    imgPath: model3,
    name: "Emma",
    age: "24"
  }
];

// nope,likeボタンを押した際にカードの移動アニメーション時間
const animationTime = 600;

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
`;

export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          imgPath: model1,
          name: "Lara",
          age: "22"
        },
        {
          id: 2,
          imgPath: model2,
          name: "Sandra",
          age: "18"
        },
        {
          id: 3,
          imgPath: model3,
          name: "Emma",
          age: "24"
        }
      ]
    };
    this.firstPeople = React.createRef();
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(e) {
    const isLikeAction = e.currentTarget.name; // 付与するclassの名前の判別

    // randomなpeopleの選出
    const randomNum = Math.floor(Math.random() * peopleData.length);
    const randomPeople = peopleData[randomNum];

    // 表示されていたカードを削除し、ランダムにデータを追加した新しいpeopleデータ
    const newItem = this.state.people.slice(1).concat(randomPeople);

    const obj = this.firstPeople.current; // 表示されているpeopleのnode
    obj.classList.add(isLikeAction);
    setTimeout(() => {
      obj.classList.remove(isLikeAction);
      this.setState({
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
    const displayedPersonId = this.state.people[0].id;
    return (
      <>
        <PeopleStyle>{item}</PeopleStyle>
        <UserActionsStyle>
          <NopeBtn clickFunc={this.handleAction} />
          <JumpToUserInfo id={displayedPersonId} />
          <LikeBtn clickFunc={this.handleAction} />
        </UserActionsStyle>
      </>
    );
  }
}
