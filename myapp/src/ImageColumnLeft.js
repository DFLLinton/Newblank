import "./styles.css";

const ImageColumnLeft = (props) => {
  const {image1Src} = props;
console.log(image1Src);

  return (
    <div className="associatedImage" id="image1">
            <img src={require('.//images/favanswer.jpg')} className="sampleImage" id="image1file" />
      <img src={require('.//images/vinos.jpg')} className="sampleImage" id="image1file" />
      <div className="sampleText" id="leftText">
      </div>
    </div>
  );
}
export default ImageColumnLeft;


