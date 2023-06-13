import "./styles.css";
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ImageColumnLeft() {
    const {
        image1Visible,
        image1Src,
        image2Visible,
        image2Src,
        leftTextContent,
        rightTextContent
      } = useContext(AppContext);
      
      console.log('image1Src:', image1Src);
  return (
    <div className="associatedImage" id="image1">
      <img src={image1Src} className="sampleImage" id="image1file" />
      <div className="sampleText" id="leftText">
        {leftTextContent}
      </div>
    </div>
  );
}