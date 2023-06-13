import "./styles.css";
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ImageColumnRight() {
    const {
        image1Visible,
        image1Src,
        image2Visible,
        image2Src,
        leftTextContent,
        rightTextContent
      } = useContext(AppContext);
  return (
    <div className="associatedImageRight" id="image2">
      <img src={image2Src} className="sampleImage" id="image2file" />
      <div className="sampleText" id="rightText">
        {rightTextContent}
      </div>
    </div>
  );
}