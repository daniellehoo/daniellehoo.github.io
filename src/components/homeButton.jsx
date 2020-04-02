import React from "react";
import Cat from "../assets/cat_icon.png";

function homeButton() {
  return (
    <div className="homeButton">
      <a href="/">
        <img src={Cat} />
      </a>
    </div>
  );
}

export default homeButton;