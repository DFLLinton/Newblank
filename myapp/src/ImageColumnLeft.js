import "./styles.css";

const ImageColumnLeft = (props) => {
  const {image1Src} = props;

  return (
    <div className="associatedImage" id="image1">
      <img src={image1Src} className="sampleImage" id="image1file" />
      <div className="sampleText" id="leftText">
      </div>
    </div>
  );
}
export default ImageColumnLeft;


