import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import Social from "./social_buttons";

function replaceTextWithLinks(project, text) {
  let linkedText;
  let regexChinatown = /The Chinese in America/g;
  let regexSitu = /SITU Research/g;
  let regexLeaflet = /Leaflet.js/g;
  let regexOurChildrensTrust = /Our Children's Trust/g;

  switch (project) {
    case "Chinatown USA":
      linkedText = text.replace(
        regexChinatown,
        "<a href='https://www.penguinrandomhouse.com/books/288096/the-chinese-in-america-by-iris-chang/' target='_blank'>The Chinese in America</a>"
      );
      break;
    case "Our Children's Trust":
      linkedText = text
        .replace(
          regexOurChildrensTrust,
          "<a href='https://www.ourchildrenstrust.org/' target='_blank'>Our Children's Trust</a>"
        )
        .replace(
          regexSitu,
          "<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>"
        )
        .replace(
          regexLeaflet,
          "<a href='https://leafletjs.com/' target='_blank'>Leaflet.js</a>"
        )
        .trim();
      break;
    default:
      console.log("");
      break;
  }

  return linkedText;
}

function Project(data) {
  let { url } = useParams();
  let projectData = data.projectsData;

  const description = projectData.map((thing) => {
    return thing.url === url ? (
      <div
        key={thing.id}
        class="projectClass"
        dangerouslySetInnerHTML={{
          __html: replaceTextWithLinks(thing.title, thing.description),
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
          <a href="#/Projects">{`<< Back to Projects`}</a>
        </div>
        <Social />
      </div>
    </>
  );
}

export default Project;
