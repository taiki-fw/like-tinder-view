import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const ActionBtn = styled.button`
  display: inline-block;
  width: 48.75px;
  height: 48.75px;
  background-color: white;
  outline: none;
  border: none;
  border-radius: 50%;
`;

const ShowUserInfoBtn = styled(ActionBtn)`
  margin: 0 2em;
`;

const NopeBtn = props => (
  <ActionBtn onClick={e => props.clickFunc(e)} name="nope">
    <FontAwesomeIcon icon={faTimes} size="2x" color="orangered" />
  </ActionBtn>
);

const LikeBtn = props => (
  <ActionBtn onClick={e => props.clickFunc(e)} name="like">
    <FontAwesomeIcon icon={faHeart} size="2x" color="aquamarine" />
  </ActionBtn>
);

const JumpToUserInfo = () => (
  <ShowUserInfoBtn>
    <FontAwesomeIcon icon={faUserAlt} size="2x" color="deepskyblue" />
  </ShowUserInfoBtn>
);

export { NopeBtn, LikeBtn, JumpToUserInfo };
