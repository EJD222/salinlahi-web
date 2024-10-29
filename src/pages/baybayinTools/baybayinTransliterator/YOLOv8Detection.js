import React, { useState, useRef } from 'react';
import * as ort from 'onnxruntime-web';

// COCO or custom labels
const customLabels = [
  "a", "b", "ba", "be_bi", "bo_bu", "d_r", "da_ra", "de_di_re_ri",
  "do_du_ro_ru", "e_i", "g", "ga", "ge_gi", "go_gu", "h", "ha",
  "he_hi", "ho_hu", "k", "ka", "ke_ki", "ko_ku", "l", "la",
  "le_li", "lo_lu", "m", "ma", "me_mi", "mo_mu", "n", "na",
  "ne_ni", "ng", "nga", "nge_ngi", "ngo_ngu", "no_nu", "o_u",
  "p", "pa", "pe_pi", "po_pu", "s", "sa", "se_si", "so_su",
  "t", "ta", "te_ti", "to_tu", "w", "wa", "we_wi", "wo_wu",
  "y", "ya", "ye_yi", "yo_yu"
];
const YOLOv8Detection = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [originalImg, setOriginalImg] = useState(null);
  const canvasRef = useRef(null);

  // Handle image upload and detection
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = async () => {
        // Store original image for display
        setOriginalImg(img);
        
        // Preprocess image and run YOLOv8 detection
        const { preprocessedCanvas, scaleFactor, offsetX, offsetY } = preprocessImage(img);
        const inputTensor = createInputTensor(preprocessedCanvas);
        const output = await runModel(inputTensor);

        // Draw detections on the original-sized image
        drawDetections(output, img, scaleFactor, offsetX, offsetY);
      };
    } catch (err) {
      setError(`Error: ${err.message}`);
      console.error('Error during detection:', err);
    } finally {
      setLoading(false);
    }
  };

  // Preprocess the image to 640x640 with padding
  const preprocessImage = (img) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 640;
    canvas.height = 640;

    // Calculate scaling factor and offsets
    const scaleFactor = Math.min(640 / img.width, 640 / img.height);
    const resizedWidth = img.width * scaleFactor;
    const resizedHeight = img.height * scaleFactor;
    const offsetX = (640 - resizedWidth) / 2;
    const offsetY = (640 - resizedHeight) / 2;

    // Draw the image on the canvas with padding
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 640, 640);
    ctx.drawImage(img, offsetX, offsetY, resizedWidth, resizedHeight);

    return { preprocessedCanvas: canvas, scaleFactor, offsetX, offsetY };
  };

  // Create input tensor from the preprocessed canvas
  const createInputTensor = (canvas) => {
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, 640, 640);
    const { data } = imgData;

    const floatData = new Float32Array(3 * 640 * 640);
    for (let i = 0, j = 0; i < data.length; i += 4, j++) {
      floatData[j] = data[i] / 255; // R
      floatData[j + 640 * 640] = data[i + 1] / 255; // G
      floatData[j + 2 * 640 * 640] = data[i + 2] / 255; // B
    }

    return new ort.Tensor('float32', floatData, [1, 3, 640, 640]);
  };

  // Run the ONNX model
  const runModel = async (inputTensor) => {
    const modelPath = '/assets/models/best.onnx'; // Update this to your model path

    try {
      const session = await ort.InferenceSession.create(modelPath, {
        executionProviders: ['wasm'],
      });

      const feeds = { images: inputTensor };
      const results = await session.run(feeds);
      return results['output0'].data;
    } catch (err) {
      throw new Error(`Failed to load or run the model: ${err.message}`);
    }
  };

  // Draw detections on the original image size
  const drawDetections = (output, img, scaleFactor, offsetX, offsetY) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, img.width, img.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);

    const numBoxes = 8400; // Adjust based on model output
    const numClasses = customLabels.length; // Adjust based on your labels

    ctx.strokeStyle = '#00FF00';
    ctx.lineWidth = 2;
    ctx.font = '18px Arial';

    // Loop through the model's output to extract boxes
    for (let i = 0; i < numBoxes; i++) {
      const [classId, score] = [...Array(numClasses).keys()]
        .map((col) => [col, output[numBoxes * (col + 4) + i]])
        .reduce((max, curr) => (curr[1] > max[1] ? curr : max), [0, 0]);

      // Only draw boxes with a confidence score > 0.5
      if (score > 0.5) {
        const xc = output[i];
        const yc = output[numBoxes + i];
        const w = output[2 * numBoxes + i];
        const h = output[3 * numBoxes + i];

        // Convert coordinates back to the original scale
        const x1 = (xc - w / 2 - offsetX) / scaleFactor;
        const y1 = (yc - h / 2 - offsetY) / scaleFactor;
        const x2 = (xc + w / 2 - offsetX) / scaleFactor;
        const y2 = (yc + h / 2 - offsetY) / scaleFactor;

        // Draw bounding box
        ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);

        // Draw label
        const label = `${customLabels[classId]} (${(score * 100).toFixed(1)}%)`;
        ctx.fillStyle = '#00FF00';
        ctx.fillText(label, x1, y1 - 5);
      }
    }
  };

  return (
    <div>
      <h2>YOLOv8 Object Detection</h2>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      {loading && <p>Loading model and detecting objects...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <canvas ref={canvasRef} style={{ border: '1px solid black', marginTop: '10px' }} />
    </div>
  );
};

export default YOLOv8Detection;