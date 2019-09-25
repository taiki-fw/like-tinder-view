import React from "react";
import styled from "styled-components";

// class Person extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imgPath: this.props.imgPath,
//       name: this.props.name,
//       age: this.props.age,
//       cssClass: this.props.cssClass
//     };
//   }
//   render() {
//     return (
//       <PersonStyled className={`${this.state.cssClass}`} ref={this.props.ref}>
//         <img alt={`${this.state.name}さんの画像`} src={this.state.imgPath} />
//         <span>
//           <strong>{this.state.name}</strong>,{this.state.age}
//         </span>
//       </PersonStyled>
//     );
//   }
// }

const Person = React.forwardRef(({ imgPath, name, age, cssClass }, ref) => (
  <PersonStyled className={`${cssClass}`} ref={ref}>
    <img alt={`${name}さんの画像`} src={imgPath} />
    <span>
      <strong>{name}</strong>,{age}
    </span>
  </PersonStyled>
));

const PersonStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 265px;
  margin: 0 auto;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  transition: all 5s linear;

  &.like {
    transform: translateX(100px);
  }

  &.nope {
    transform: translateX(50px);
  }

  &:first-child {
    z-index: 5;
  }

  &:nth-child(2) {
    z-index: 4;
    top: 7px;
    transform: scale(0.98);
  }

  &:nth-child(3) {
    z-index: 3;
    top: 14px;
    transform: scale(0.96);
  }

  &:nth-child(n + 4) {
    z-index: 2;
  }

  & > img,
  & > span {
    display: block;
    width: 100%;
  }

  & > img {
    height: 100%;
  }

  & > span {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    background-color: white;
  }
`;

export default Person;
