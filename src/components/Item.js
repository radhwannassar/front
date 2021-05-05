import React, { useRef, useState,useCallback, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import {drawRect} from "./utilities"; 
import { recomposeColor } from "@material-ui/core";

function Item() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [imgSrc, setImgSrc] = useState(null);
  const handleSubmit = (e) => {
  e.preventDefault();
const category = { imgSrc };
fetch("http://localhost:3001/categories", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(category),
}).then((response) => {
  console.log(response.status);
});
};
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
 console.log(imgSrc)

  // need to useRef=> https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
  const handleImg = (e) => {};


  const runCoco = async () => {

    const net = await tf.loadGraphModel('https://directionstfodd.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json')
    

    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
  
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

     
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

    
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      
    

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()
    

      const ctx = canvasRef.current.getContext("2d");

       
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.9, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
      <div> <button  onClick={capture}>
        Capture photo
      </button>
    
      <h3>Result</h3>
      {imgSrc && (
        <img src={imgSrc}  alt="webcam screenshot" />
      )}
    </div>

    <form onSubmit={handleSubmit} type="file"
                value={imgSrc}
                onChange={(e) => setImgSrc(e.target.value)}
                name="picture">
      
                
               
              <h5></h5>
            <button >
                <a>Add</a>
              </button>
    </form>

    </div>
  );
}

export default Item;
