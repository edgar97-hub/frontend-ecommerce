import "./TestProduct.css";
import { useState, useRef, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";

function TestProduct({ images = [] }) {
  const [img, setImg] = useState("");
  const refs = useRef([]);

  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images?.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  useEffect(() => {
    if (images.length) {
      setImg(images[0].url);
    }
  }, [images]);

  return (
    <div className="wrapper">
      <div className="left">
        <div className="left_1">
          {images?.map((image, i) => (
            <div
              className={i == 0 ? "img_wrap image-active" : "img_wrap"}
              key={i}
              onMouseOver={() => hoverHandler(image.url, i)}
              ref={(el) => (refs.current[i] = el)}
            >
              <img src={image.url} alt="" className="imgtest" />
            </div>
          ))}
        </div>
        <div className="left_2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                src: img,
                width: 1400,
                height: 1200,
              },
              enlargedImageContainerStyle: {
                zIndex: "1500",
              },
              enlargedImageContainerDimensions: {
                width: "160%",
                height: "140%",
              },
            }}
          />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default TestProduct;
