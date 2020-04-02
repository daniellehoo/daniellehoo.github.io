import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import Social from "./social_buttons";


function replaceTextWithLinks(text){
  let regexChinatown = /The Chinese in America/g;
  let linkedText = text.replace(
    regexChinatown,
    "<a href='https://www.penguinrandomhouse.com/books/288096/the-chinese-in-america-by-iris-chang/'>The Chinese in America</a>"
  );
  return linkedText
}

function Project(data) {
  let { url } = useParams();
  let projectData = Object.values(data)[0];
  const description = projectData.map(thing => {
    return thing.url === url ? (
      <div
        dangerouslySetInnerHTML={{
          __html: replaceTextWithLinks(thing.description)
        }}
      >
      </div>
    ) : null;
  });
  return (
    <>
    <div className="project">
      <Nav />
      {description}
      <Social />
    </div>
    </>
  );
}

export default Project;