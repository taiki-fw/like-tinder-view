import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { peopleData } from "../People";
import { UserImg, UserInfo } from "./Person";

const PersonDetail = props => {
  const { params } = props.match;
  const id = parseInt(params.id, 10);
  const person = peopleData.filter(p => p.id === id)[0];
  return (
    <PersonDetailStyle>
      <UserImg alt={`${person.name}さんの画像`} src={person.imgPath} />
      <UserInfo>
        <strong>{person.name}</strong>,{person.age}
        <p>{person.job}</p>
        <p>{person.distance}</p>
      </UserInfo>
      <Link to="/">Home</Link>
    </PersonDetailStyle>
  );
};

const PersonDetailStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  background-color: white;

  & a {
    display: inline-block;
    color: black;
    text-decoration: none;
  }
`;

export default PersonDetail;
