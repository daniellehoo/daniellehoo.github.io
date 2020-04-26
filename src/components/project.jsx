import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import Social from "./social_buttons";

function replaceTextWithLinks(text) {
  let regexChinatown = /The Chinese in America/g;
  let linkedText = text
    .replace(
      regexChinatown,
      "<a href='https://www.penguinrandomhouse.com/books/288096/the-chinese-in-america-by-iris-chang/'>The Chinese in America</a>"
    )
    .trim();
  return linkedText;
}

function Project(data) {
  console.log(data);
  let { url } = useParams();
  // let projectData = Object.values(data.projectsData)[0];
  let projectData = data.projectsData;

  const description = projectData.map((thing) => {
    return thing.url === url ? (
      <div
        key={thing.id}
        class="projectClass"
        dangerouslySetInnerHTML={{
          __html: replaceTextWithLinks(thing.description),
        }}
      ></div>
    ) : null;
  });

  const image = projectData.map((item) => {
    return item.url === url ? <img src={item.img}></img> : null;
  });

  return (
    <>
      <div className="project">
        <Nav />
        {description}
        {image}
        <div className="back">
          <a href="#/Projects">
            {`<< Back to Projects`}
          </a>
        </div>
        <Social />
      </div>
    </>
  );
}

export default Project;
