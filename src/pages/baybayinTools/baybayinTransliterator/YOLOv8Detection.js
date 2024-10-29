import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as ort from 'onnxruntime-web';
import '../../../styles/baybayinTools/baybayinTransliterator/YOLOv8Detection.css';

// Labels for your ONNX model
const labels = [
  "a", "b", "ba", "be_bi", "bo_bu", "d_r", "da_ra", "de_di_re_ri",
  "do_du_ro_ru", "e_i", "g", "ga", "ge_gi", "go_gu", "h", "ha",
  "he_hi", "ho_hu", "k", "ka", "ke_ki", "ko_ku", "l", "la",
  "le_li", "lo_lu", "m", "ma", "me_mi", "mo_mu", "n", "na",
  "ne_ni", "ng", "nga", "nge_ngi", "ngo_ngu", "no_nu", "o_u",
  "p", "pa", "pe_pi", "po_pu", "s", "sa", "se_si", "so_su",
  "t", "ta", "te_ti", "to_tu", "w", "wa", "we_wi", "wo_wu",
  "y", "ya", "ye_yi", "yo_yu"
];

const modelPath = '/yolov8n.onnx'; // Make sure the model is in the public folder

const YOLOv8Detection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the ONNX model when the component mounts
    const loadModel = async () => {
      try {
        const session = await ort.InferenceSession.create(modelPath, {
          executionProviders: ['wasm'], // Use WebAssembly for browser inference
        });
        setModel(session);
        setLoading(false);
        console.log('ONNX model loaded.');
      } catch (err) {
        console.error('Failed to load model:', err);
      }
    };

    loadModel();
  }, []);

  // Capture image from webcam and run inference
  const captureAndDetect = async () => {
    if (!webcamRef.current || !model) return;

    // Capture a screenshot from the webcam
    const imageSrc = webcamRef.current.getScreenshot();
    const imageBlob = await fetch(imageSrc).then(res => res.blob());
    const imageArrayBuffer = await imageBlob.arrayBuffer();

    // Preprocess image to match YOLOv8 input format
    const inputTensor = preprocessImage(imageArrayBuffer);
    const results = await model.run({ images: inputTensor });

    // Postprocess results and draw boxes on canvas
    const detectionData = postprocessResults(results);
    drawDetections(detectionData);
  };

  // Preprocess image to match YOLOv8 input format
  const preprocessImage = (buffer) => {
    // Placeholder preprocessing: resize and normalize as needed
    const inputTensor = new ort.Tensor('float32', new Float32Array(buffer), [1, 3, 640, 640]);
    return inputTensor;
  };

  // Postprocess YOLOv8 output for display
  const postprocessResults = (results) => {
    const boxes = results['output'].data; // Adjust this based on YOLOv8 output
    const detectionData = [];

    // Assume the model returns bounding boxes, confidences, and class IDs
    for (let i = 0; i < boxes.length; i += 6) {
      const [x, y, w, h, confidence, classId] = boxes.slice(i, i + 6);
      if (confidence > 0.5) {
        detectionData.push({
          x, y, w, h, confidence,
          className: labels[classId] || 'Unknown' // Map class ID to label
        });
      }
    }

    return detectionData;
  };

  // Draw detections on the canvas
  const drawDetections = (detections) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    detections.forEach((detection) => {
      ctx.beginPath();
      ctx.rect(detection.x, detection.y, detection.w, detection.h);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.stroke();
      ctx.fillStyle = 'red';
      ctx.fillText(
        `${detection.className} (${(detection.confidence * 100).toFixed(1)}%)`,
        detection.x,
        detection.y - 5
      );
    });
  };

  return (
    <div className="yolov8-container">
      <h2>YOLOv8 Detection with Custom Labels</h2>
      <div className="webcam-container">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          height={480}
        />
        <canvas
          ref={canvasRef}
          className="overlay-canvas"
          width={640}
          height={480}
        />
      </div>
      <button className="detect-btn" onClick={captureAndDetect}>
        Capture & Detect
      </button>
      {loading && <p>Loading model...</p>}
    </div>
  );  
};

export default YOLOv8Detection;