import React from "react";
import styled from "styled-components";
import Hammer from "react-hammerjs";

// スワイプで開いたときの距離.
const SWIPED_DISTANCE = window.innerWidth * 0.2;

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deltaX: 0
    };
  }

  onPanStart(e) {
    this.setState({
      deltaX: 0
    });
  }

  onPan(e) {
    this.setState({
      deltaX: e.deltaX
    });
  }

  onPanEnd(e) {
    if (Math.abs(this.state.deltaX) >= SWIPED_DISTANCE) {
      window.alert("表示している要素を削除します");
      this.props.onSwipe();
      this.setState({ deltaX: 0 });
    } else {
    }
  }

  render() {
    // スワイプ量に合わせて、要素の位置を変更する.
    let style = {
      transform: `translate(${this.state.deltaX}px, 0)`,
      backgroundColor: "white"
    };

    const property = this.props;

    return (
      <Hammer
        onPanStart={this.onPanStart.bind(this)}
        onPan={this.onPan.bind(this)}
        onPanEnd={this.onPanEnd.bind(this)}
      >
        <PersonStyled
          style={style}
          animationTimePerMillisecond={property.animationTimePerMillisecond}
        >
          <UserImg alt={`${property.name}さんの画像`} src={property.imgPath} />
          <UserInfo>
            <strong>{property.name}</strong>,{property.age}
          </UserInfo>
        </PersonStyled>
      </Hammer>
    );
  }
}

// const Person = React.forwardRef(
//   ({ imgPath, name, age, animationTimePerMillisecond }, ref) => (
//     <PersonStyled
//       ref={ref}
//       animationTimePerMillisecond={animationTimePerMillisecond}
//     >
//       <UserImg alt={`${name}さんの画像`} src={imgPath} />
//       <UserInfo>
//         <strong>{name}</strong>,{age}
//       </UserInfo>
//     </PersonStyled>
//   )
// );

const UserInfo = styled.span`
  text-align: left;
  display: block;
  width: 100%;
  padding: 10px;

  & > p {
    margin-top: 1em;
  }
`;

const UserImg = styled.img`
  width: 100%;
  height: 265px;
`;

const PersonStyled = styled.div`
  @keyframes likeBtn {
    0% {
      transform: scale(1) rotateZ(0deg);
      left: 0;
    }
    30% {
      transform: scale(1.05) rotateZ(0deg);
      left: 0;
    }
    100% {
      transform: rotateZ(45deg);
      left: 115%; /* 要素width 100% + 空白の部分width 15% = 115% */
    }
  }

  @keyframes nopeBtn {
    0% {
      transform: scale(1) rotateZ(360deg);
      right: 0;
    }
    30% {
      transform: scale(1.05) rotateZ(360deg);
      right: 0;
    }
    100% {
      transform: rotateZ(315deg);
      right: 115%; /* 要素width 100% + 空白の部分width 15% = 115% */
    }
  }

  position: absolute;
  top: 0;
  width: 100%;
  height: 265px;
  margin: 0 auto;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  opacity: 1;

  &.like {
    animation: likeBtn ${props => props.animationTimePerMillisecond || 0}ms
      linear;
  }

  &.nope {
    animation: nopeBtn ${props => props.animationTimePerMillisecond || 0}ms
      linear;
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

  & > img {
    height: 100%;
  }

  & > span {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
  }
`;

export { Person, UserInfo, UserImg };
