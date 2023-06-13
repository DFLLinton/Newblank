import "./styles.css";
import React, { useState } from 'react';

export default function Project() {
  const [image1Visible, setImage1Visible] = useState(false);
  const [image1Src, setImage1Src] = useState('');
  const [image2Visible, setImage2Visible] = useState(false);
  const [image2Src, setImage2Src] = useState('');
  const [leftTextContent, setLeftTextContent] = useState('');
  const [rightTextContent, setRightTextContent] = useState('');

  const Paragraphs = {
    1: ' - Pair programming in a team of seven <br> developers deploying a new mobile <br> application.<br> - Integrating and designing twelve front-end <br> React components and APIs via Github,<br>prioritising principles of object oriented<br>programming.',
    2: ' - Managed web development for new Soho-based <br> Bar Kroketa.<br> - The process involved communicating in a<br>team of eight designers, entrepreneurs and<br>advertising executives to agree on a viable<br>digital presence.<br> - Anticipated server issues with web<br>deployment and suggested solutions allowing<br>us to launch a five page, dynamic website<br>within stringent deadlines.',
    3: 'Creating a website using PHP, CSS, HTML, and JavaScript involves combining front-end and back-end technologies to build the structure, style, and interactivity. Deploying it on an FTP server requires configuring file transfers and ensuring proper server setup for PHP execution. Attention to file organization and testing is crucial for a successful online presence.',
    4: 'Created Machine Learning Algorithm',
    5: ' - Developed own hypotheses and programmed<br>new experimental technique using Bonvision<br>interface.<br> - My paradigm has been adopted by subsequent<br>researchers at UCL demonstrating its<br>technical aptitude and versatility.<br> - Presented progress and discussed findings<br>at weekly meetings with both senior<br>researchers and software developer, Goncalo<br>Lopes.'
  };

  function showPicture(x) {
    if (x === 'favourite') {
      setImage1Visible(true);
      setImage1Src('images/favanswer.jpg');
      setLeftTextContent(Paragraphs[1]);
    } else if (x === 'kroketa') {
      setImage2Visible(true);
      setImage2Src('images/kroketa.jpg');
      setRightTextContent(Paragraphs[2]);
    } else if (x === 'vinos') {
      setImage2Visible(true);
      setImage2Src('images/vinos.jpg');
      setRightTextContent(Paragraphs[4]);
    } else if (x === 'gender') {
      setImage1Visible(true);
      setImage1Src('images/sample.jpeg');
      setLeftTextContent(Paragraphs[3]);
    } else if (x === 'animacy') {
      setImage1Visible(true);
      setImage1Src('images/animacy.png');
      setLeftTextContent(Paragraphs[5]);
    }
  }

  function hidePicture() {
    setImage1Visible(false);
    setImage2Visible(false);
  }

  return (
    <div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("favourite")}
        onMouseLeave={hidePicture}
      >
        <h2>Favourite Answer</h2>
        <small>React, JSX & CSS</small>
      </div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("kroketa")}
        onMouseLeave={hidePicture}
      >
        <h2>Kroketa Website</h2>
        <small>Squarespace & Custom CSS</small>
      </div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("gender")}
        onMouseLeave={hidePicture}
      >
        <h2>Gender Pay Gap AI</h2>
        <small>Python</small>
      </div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("vinos")}
        onMouseLeave={hidePicture}
      >
       <h2>Vinos Colltor Website</h2>
        <small>HTML, CSS, Javascript & PHP</small>
      </div>
      <div
        className="projectDiv"
        id="projectDiv"
        onMouseOver={() => showPicture("animacy")}
        onMouseLeave={hidePicture}
      >
        <h2>Animacy Testing Paradigm</h2>
        <small>Bonsai & Bonvision</small>
      </div>
    </div>
  );
}