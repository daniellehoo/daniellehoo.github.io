import React from "react";

function social() {
  const buttons = [
    {
      id: 0,
      url: "http://www.instagram.com/danihoo",
      class: "fab fa-instagram",
    },
    {
      id: 1,
      url: "http://github.com/daniellehoo",
      class: "fab fa-github",
    },
    {
      id: 2,
      url: "http://www.twitter.com/daniellehoo",
      class: "fab fa-twitter",
    },

    {
      id: 3,
      url: "http://www.soundcloud.com/danihoo",
      class: "fab fa-soundcloud",
    },
    {
      id: 4,
      url: "http://www.linkedin.com/in/danielle-hoo",
      class: "fab fa-linkedin",
    },
    {
      id: 5,
      url: "http://www.medium.com/@danihoo",
      class: "fab fa-medium",
    },
    {
      id: 6,
      url: "https://www.pinterest.com/daniellemhoo/",
      class: "fab fa-pinterest",
    },
  ];

  const grid = buttons.map((button, index) => (
    <div className={`button id_${button.id}`} key={`${index}`}>
      <a href={`${button.url}`}>
        <i className={`${button.class}`}></i>
      </a>
    </div>
  ));

  return <div className="social" key="1">{grid}</div>;
}

export default social;
