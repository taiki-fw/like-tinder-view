import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faTimesCircle,
  faCaretSquareUp
} from "@fortawesome/free-regular-svg-icons";

const NopeBtn = () => (
  <button>
    <FontAwesomeIcon icon={faTimesCircle} />
  </button>
);

const LikeBtn = () => (
  <button>
    <FontAwesomeIcon icon={faHeart} />
  </button>
);

const JumpToUserInfo = () => (
  <button>
    <FontAwesomeIcon icon={faCaretSquareUp} />
  </button>
);

const UserActions = () => (
  <div style={styles.actionDiv}>
    <NopeBtn />
    <JumpToUserInfo />
    <LikeBtn />
  </div>
);

const styles = {
  actionDiv: {
    width: "85%",
    margin: "25px auto 0"
  }
};

export { UserActions };
