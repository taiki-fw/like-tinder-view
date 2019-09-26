import React from "react";
import styled from "styled-components";

const Person = React.forwardRef(
  ({ imgPath, name, age, animationTimePerMillisecond }, ref) => (
    <PersonStyled
      ref={ref}
      animationTimePerMillisecond={animationTimePerMillisecond}
    >
      <img alt={`${name}さんの画像`} src={imgPath} />
      <span>
        <strong>{name}</strong>,{age}
      </span>
    </PersonStyled>
  )
);

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
    animation: likeBtn ${props => props.animationTimePerMillisecond}ms linear;
  }

  &.nope {
    animation: nopeBtn ${props => props.animationTimePerMillisecond}ms linear;
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
