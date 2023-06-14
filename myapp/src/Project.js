import "./styles.css";
import React, { useState } from 'react';
import ImageColumnLeft from './ImageColumnLeft.js';
import ImageColumnRight from './ImageColumnRight.js';

export default function Project() {
  const [imageSrc, setImageSrc] = useState('.//images/vinos.jpg');
  const [leftTextContent, setLeftTextContent] = useState('');
  const [rightTextContent, setRightTextContent] = useState('');

  const Paragraphs = {
    1: ' - Pair programming  in a team of seven <br> developers deploying a new mobile <br> application.<br> - Integrating and designing twelve front-end <br> React components and APIs via Github,<br>prioritising principles of object oriented<br>programming.',
    2: ' - Managed web development for new Soho-based <br> Bar Kroketa.<br> - The process involved communicating in a<br>team of eight designers, entrepreneurs and<br>advertising executives to agree on a viable<br>digital presence.<br> - Anticipated server issues with web<br>deployment and suggested solutions allowing<br>us to launch a five page, dynamic website<br>within stringent deadlines.',
    3: 'Creating a website  using PHP, CSS, HTML, and JavaScript involves combining front-end and back-end technologies to build the structure, style, and interactivity. Deploying it on an FTP server requires configuring file transfers and ensuring proper server setup for PHP execution. Attention to file organization and testing is crucial for a successful online presence.',
    4: 'Created Machine Learning Algorithm',
    5: ' - Developed own hypotheses and programmed<br>new experimental technique using Bonvision<br>interface.<br> - My paradigm has been adopted by subsequent<br>researchers at UCL demonstrating its<br>technical aptitude and versatility.<br> - Presented progress and discussed findings<br>at weekly meetings with both senior<br>researchers and software developer, Goncalo<br>Lopes.'
  };

  function showPicture(x) {
    if (x === 'favourite') {
      setImageSrc('favourite');
    } else if (x === 'kroketa') {
      setImageSrc('kroketa');
    } else if (x === 'vinos') {
      setImageSrc('vinos');
    } else if (x === 'gender') {
      setImageSrc('gender');
    } else if (x === 'animacy') {
      setImageSrc('animacy');
    }
  }



  return (
    <div>
    <ImageColumnLeft image1Src={imageSrc} />
 <ImageColumnRight image2Src={imageSrc}/>
    <div id="column">
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("favourite")}
      >
        <h2>Favourite Answer</h2>
        <small>React, JSX & CSS</small>
      </div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("kroketa")}
      >
        <h2>Kroketa Website</h2>
        <small>Squarespace & Custom CSS</small>
      </div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("gender")}
      >
        <h2>Gender Pay Gap AI</h2>
        <small>Python</small>
      </div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("vinos")}
      >
       <h2>Vinos Colltor Website</h2>
        <small>HTML, CSS, Javascript & PHP</small>
      </div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("animacy")}
      >
        <h2>Animacy Testing Paradigm</h2>
        <small>Bonsai & Bonvision</small>
      </div>
    </div>
    </div>
  );
}