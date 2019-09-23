import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const NopeBtn = () => (
  <button>
    <FontAwesomeIcon icon={faTimes} size="2x" color="orangered" />
  </button>
);

const LikeBtn = () => (
  <button>
    <FontAwesomeIcon icon={faHeart} size="2x" color="aquamarine" />
  </button>
);

const JumpToUserInfo = () => (
  <button>
    <FontAwesomeIcon icon={faUserAlt} size="2x" color="deepskyblue" />
  </button>
);

const UserActions = () => {
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
  return (
    <UserActionsStyle>
      <NopeBtn />
      <JumpToUserInfo />
      <LikeBtn />
    </UserActionsStyle>
  );
};

export { UserActions };
