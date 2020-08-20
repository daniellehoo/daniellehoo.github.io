/* eslint-disable no-fallthrough */
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Nav from './nav';
import Social from './social_buttons';

function replaceTextWithLinks(project, text) {
  let linkedText;
  let regexChinatown = /The Chinese in America/g;
  let regexSitu = /SITU Research/g;
  let regexLeaflet = /Leaflet.js/g;
  let regexOurChildrensTrust = /Our Children's Trust/g;
  let GIEI = /GIEI/g;
  let EAAF = /EAAF/g;
  let regexNicaragua = /digital platform/g;
  let regexAmnesty = /Amnesty International/g;
  let regexVisualInvestigation = /visual investigation/g;
  let video = /video/g;
  let p5 = /p5/g;
  let jesse = /Jesse Chen/g;
  let playground = /playground/g;
  let codebase = /here/g;

  switch (project) {
    case 'Chinatown USA':
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
    case 'Nicaragua':
      linkedText = text
        .replace(
          regexNicaragua,
          "<a href='http://gieinicaragua-cartografia-violencia.org/' target='_blank'>digital platform</a>"
        )
        .replace(EAAF, "<a href='https://eaaf.org' target='_blank'>EAAF</a>")
        .replace(
          GIEI,
          "<a href='https://gieinicaragua.org/en' target='_blank'>GIEI</a>"
        )
        .replace(
          regexSitu,
          "<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>"
        )
        .trim();
      break;
    case 'Amnesty International':
      linkedText = text
        .replace(
          regexSitu,
          "<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>"
        )
        .replace(
          regexAmnesty,
          "<a href='https://www.amnesty.org/en/' target='_blank'>Amnesty International</a>"
        )
        .replace(
          regexVisualInvestigation,
          "<a href='https://teargas.amnesty.org/iraq/' target='_blank'>visual investigation</a>"
        )
        .trim();
      break;
    case 'Tear Gas':
      linkedText = text
        .replace(
          regexSitu,
          "<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>"
        )
        .replace(
          regexAmnesty,
          "<a href='https://www.amnesty.org/en/' target='_blank'>Amnesty International</a>"
        )
        .replace(
          video,
          "<a href='https://teargas.amnesty.org/#how-it-works' target='_blank'>video</a>"
        )
        .trim();
      break;
    case 'VaporJong':
      linkedText = text
        .replace(p5, "<a href='https://p5js.org/' target='_blank'>p5</a>")
        .replace(
          jesse,
          "<a href='https://github.com/jessechen' target='_blank'>Jesse Chen</a>"
        )
        .replace(
          playground,
          "<a href='https://daniellehoo.com/vaporJong/vaporJong.html' target='_blank'>playground</a>"
        )
        .replace(
          codebase,
          "<a href='https://github.com/daniellehoo/vaporJong' target='_blank'>here</a>"
        )
        .trim();
    default:
      console.log('');
      break;
  }

  return linkedText;
}

function Project(data) {
  let {url} = useParams();
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

  const [active, setActive] = useState(false);

  return (
    <>
      <Nav isActive={active} />
      <div className="project">
        <div className="project-content">
          {image}
          {description}
        </div>
        <div className="back">
          <a href="#/Projects">{`<< Back to Projects`}</a>
        </div>
      </div>
      <Social />
    </>
  );
}

export default Project;
