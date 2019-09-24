import React from "react";
import styled from "styled-components";

const Person = ({ imgPath, name, age }) => (
  <PersonStyled>
    <img alt={`${name}さんの画像`} src={imgPath} />
    <span>
      <strong>{name}</strong>,{age}
    </span>
  </PersonStyled>
);

const PersonStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 265px;
  margin: 0 auto;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s linear;

  .leave--like {
    transform: translateX(100%);
  }

  :first-child {
    z-index: 5;
    transform: scale(1);
  }

  :nth-child(2) {
    z-index: 4;
    top: 7px;
    transform: scale(0.98);
  }

  :nth-child(3) {
    z-index: 3;
    top: 14px;
    transform: scale(0.96);
  }

  :nth-child(n + 4) {
    z-index: 2;
  }

  > img,
  > span {
    display: block;
    width: 100%;
  }

  > img {
    height: 100%;
  }

  > span {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    background-color: white;
  }
`;

export default Person;
