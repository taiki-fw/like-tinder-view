import React from "react";
import styled from "styled-components";

import "./People.css"; //transitionのためのCSS
import Person from "./components/Person";
import { NopeBtn, LikeBtn } from "./components/ActionBtn";

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
    // 表示しているpeopleにcssを付与する。
    const isLikeAction = e.currentTarget.name;
    const newItem = this.state.people.slice(1);
    console.log(this.firstPeople);
    const obj = this.firstPeople.current;
    obj.classList.add(isLikeAction);
    setTimeout(() => {
      obj.classList.remove(isLikeAction); // ここをPromiseに
      this.setState({
        isLike: isLikeAction,
        people: newItem
      });
    }, 2000);
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
        <div style={style.People}>{item}</div>
        <NopeBtn clickFunc={this.handleAction.bind(this)} />
        <LikeBtn clickFunc={this.handleAction.bind(this)} />
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

/*
 * PeopleコンポーネントからNope,Likeボタンにclickされた時のアクションをpropsとして渡す。
 * 各ボタンのactionType属性(なければ作る)で押したボタンを判別して、Peopleボタンに通知する。
 * それにあったクラスが付与されてカードが捲れる様なアニメーションが走る
 */
