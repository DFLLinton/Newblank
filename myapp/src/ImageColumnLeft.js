import "./styles.css";

const ImageColumnLeft = (props) => {
console.log(props.image1Src);

  return (
    <div className="associatedImage" id="image1">
      <img src={props.image1Src} className="sampleImage" id="image1file" />
      <div className="sampleText" id="leftText">
      </div>
    </div>
  );
}
export default ImageColumnLeft;