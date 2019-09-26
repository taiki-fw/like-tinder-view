import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const NopeBtn = props => (
  <button onClick={e => props.clickFunc(e)} name="nope">
    <FontAwesomeIcon icon={faTimes} size="2x" color="orangered" />
  </button>
);

const LikeBtn = props => (
  <button onClick={e => props.clickFunc(e)} name="like">
    <FontAwesomeIcon icon={faHeart} size="2x" color="aquamarine" />
  </button>
);

const JumpToUserInfo = () => (
  <button>
    <FontAwesomeIcon icon={faUserAlt} size="2x" color="deepskyblue" />
  </button>
);

export { NopeBtn, LikeBtn, JumpToUserInfo };
