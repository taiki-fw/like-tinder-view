import React from "react";

const Person = ({ imgPath, name, age }) => (
  <div style={styles.Person}>
    <img alt={`${name}さんの画像`} src={imgPath} style={styles.img} />
    <span style={styles.userInfo}>
      <strong>{name}</strong>,{age}
    </span>
  </div>
);

const styles = {
  Person: {
    width: "85%",
    margin: "0 auto",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)"
  },
  img: {
    display: "block",
    width: "100%"
  },
  userInfo: {
    display: "block",
    width: "100%",
    padding: "1.5em 1em"
  }
};

export default Person;
