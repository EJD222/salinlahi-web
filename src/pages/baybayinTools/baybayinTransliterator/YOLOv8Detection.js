import "../../../styles/baybayinTools/baybayinTransliterator/YOLOv8Detection.css"
import React, { useState, useRef } from "react"
import * as ort from "onnxruntime-web"
import { IconButton, Tab, Tabs, CircularProgress } from "@mui/material"
import {
  Image as ImageIcon,
  PhotoCamera,
  UploadFile,
  NoPhotography,
} from "@mui/icons-material"
import ReactWebcam from "react-webcam"
import CameraIcon from "@mui/icons-material/Camera"

const customLabels = [
  "a",
  "b",
  "ba",
  "be_bi",
  "bo_bu",
  "d_r",
  "da_ra",
  "de_di_re_ri",
  "do_du_ro_ru",
  "e_i",
  "g",
  "ga",
  "ge_gi",
  "go_gu",
  "h",
  "ha",
  "he_hi",
  "ho_hu",
  "k",
  "ka",
  "ke_ki",
  "ko_ku",
  "l",
  "la",
  "le_li",
  "lo_lu",
  "m",
  "ma",
  "me_mi",
  "mo_mu",
  "n",
  "na",
  "ne_ni",
  "ng",
  "nga",
  "nge_ngi",
  "ngo_ngu",
  "no_nu",
  "o_u",
  "p",
  "pa",
  "pe_pi",
  "po_pu",
  "s",
  "sa",
  "se_si",
  "so_su",
  "t",
  "ta",
  "te_ti",
  "to_tu",
  "w",
  "wa",
  "we_wi",
  "wo_wu",
  "y",
  "ya",
  "ye_yi",
  "yo_yu",
]

const YOLOv8Detection = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [originalImg, setOriginalImg] = useState(null)
  const [tabIndex, setTabIndex] = useState(0)
  const canvasRef = useRef(null)
  const imgRef = useRef(null)
  const webcamRef = useRef(null)
  const fileInputRef = useRef(null)
  const [cameraError, setCameraError] = useState(false)
  const [cameraLoading, setCameraLoading] = useState(false)

  const handleCameraReady = () => {
    setCameraLoading(false)
  }

  const handleCameraError = (error) => {
    console.error("Camera Error:", error)
    setCameraError(true)
    setCameraLoading(false)
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue)
    clearCanvas() 
  }

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    clearCanvas()
    setLoading(true)
    setError(null)

    try {
      const img = new Image()
      img.src = URL.createObjectURL(file)

      img.onload = async () => {
        setOriginalImg(img)

        const { inputTensor, scaleFactor, offsetX, offsetY } =
          preprocessImage(img)

        const output = await runModel(inputTensor)

        drawDetections(output, img, scaleFactor, offsetX, offsetY)
      }
    } catch (err) {
      setError(`Error: ${err.message}`)
      console.error("Error during detection:", err)
    } finally {
      setLoading(false)
    }
  }

  const captureImage = async () => {
    const webcam = webcamRef.current
    if (!webcam) return

    clearCanvas()

    const imageSrc = webcam.getScreenshot() 
    const img = new Image()
    img.src = imageSrc

    img.onload = async () => {
      setOriginalImg(img)

      const { inputTensor, scaleFactor, offsetX, offsetY } =
        preprocessImage(img)

      const output = await runModel(inputTensor)

      drawDetections(output, img, scaleFactor, offsetX, offsetY)
    }
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setOriginalImg(null)
  }

  const preprocessImage = (img) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = 640
    canvas.height = 640

    const scaleFactor = Math.min(640 / img.width, 640 / img.height)
    const resizedWidth = img.width * scaleFactor
    const resizedHeight = img.height * scaleFactor
    const offsetX = (640 - resizedWidth) / 2
    const offsetY = (640 - resizedHeight) / 2

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 640, 640)
    ctx.drawImage(img, offsetX, offsetY, resizedWidth, resizedHeight)

    const imgData = ctx.getImageData(0, 0, 640, 640)
    const { data } = imgData

    const floatData = new Float32Array(3 * 640 * 640)
    for (let i = 0, j = 0; i < data.length; i += 4, j++) {
      floatData[j] = data[i] / 255
      floatData[j + 640 * 640] = data[i + 1] / 255
      floatData[j + 2 * 640 * 640] = data[i + 2] / 255
    }

    const inputTensor = new ort.Tensor("float32", floatData, [1, 3, 640, 640])
    return { inputTensor, scaleFactor, offsetX, offsetY }
  }

  const runModel = async (inputTensor) => {
    const modelPath = "/assets/models/best.onnx"

    try {
      const session = await ort.InferenceSession.create(modelPath, {
        executionProviders: ["wasm"],
      })

      const feeds = { images: inputTensor }
      const results = await session.run(feeds)
      return results["output0"].data
    } catch (err) {
      throw new Error(`Failed to load or run the model: ${err.message}`)
    }
  }

  const drawDetections = (output, img, scaleFactor, offsetX, offsetY) => {
    if (!img) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const containerWidth = 640
    const containerHeight = 640
    const imgAspectRatio = img.width / img.height

    let displayWidth, displayHeight
    if (imgAspectRatio > 1) {
      displayWidth = containerWidth
      displayHeight = containerWidth / imgAspectRatio
    } else {
      displayWidth = containerHeight * imgAspectRatio
      displayHeight = containerHeight
    }

    const xScale = displayWidth / (img.width * scaleFactor)
    const yScale = displayHeight / (img.height * scaleFactor)

    canvas.width = containerWidth
    canvas.height = containerHeight

    const xOffset = (containerWidth - displayWidth) / 2
    const yOffset = (containerHeight - displayHeight) / 2

    ctx.clearRect(0, 0, containerWidth, containerHeight)
    ctx.drawImage(img, xOffset, yOffset, displayWidth, displayHeight)

    const numBoxes = 8400
    const numClasses = customLabels.length

    ctx.strokeStyle = "#FCC900"
    ctx.lineWidth = 2
    ctx.font = "16px Inter"

    for (let i = 0; i < numBoxes; i++) {
      const [classId, score] = [...Array(numClasses).keys()]
        .map((col) => [col, output[numBoxes * (col + 4) + i]])
        .reduce((max, curr) => (curr[1] > max[1] ? curr : max), [0, 0])

      if (score > 0.5) {
        const xc = output[i]
        const yc = output[numBoxes + i]
        const w = output[2 * numBoxes + i]
        const h = output[3 * numBoxes + i]

        const x1 = (xc - w / 2 - offsetX) * xScale + xOffset
        const y1 = (yc - h / 2 - offsetY) * yScale + yOffset
        const boxWidth = w * xScale
        const boxHeight = h * yScale

        ctx.strokeRect(x1, y1, boxWidth, boxHeight)

        //const label = `${customLabels[classId]} (${(score * 100).toFixed(1)}%)`;
        const label = `${customLabels[classId]}`
        ctx.fillStyle = "#000000" 
        ctx.fillRect(x1, y1 - 20, ctx.measureText(label).width + 8, 20) 
        ctx.fillStyle = "#FFFFFF"
        ctx.fillText(label, x1 + 4, y1 - 5) 
      }
    }
  }

  return (
    <div className="yolov8-container">
      <h2>Transliterate Baybayin Script to Latin Script</h2>
      <p className="note-text">
        <b>Note: </b>This Baybayin transliterator may not be 100% accurate and
        could make incorrect predictions. Please review the results carefully.
      </p>

      <div className="tabs-container">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
          className="custom-tabs"
        >
          <Tab label="File" className="custom-tab" />
          <Tab label="Camera" className="custom-tab" />
        </Tabs>
      </div>

      <div
        className="detection-container"
        style={{
          flexDirection: tabIndex === 0 ? "column" : "row",
          alignItems: "center",
        }}
      >
        {tabIndex === 1 && (
          <div className="camera-section">
            {cameraError ? (
              <div className="camera-error">
                <NoPhotography style={{ fontSize: "64px", color: "#FCC900" }} />
                <p>
                  No camera detected. Please allow permission or refresh your
                  browser.
                </p>
              </div>
            ) : (
              <>
                {cameraLoading ? (
                  <div className="camera-loading">
                    <CircularProgress style={{ color: "#FCC900" }} />
                    <p>Loading camera...</p>
                  </div>
                ) : (
                  <>
                    <ReactWebcam
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width={640}
                      height={640}
                      className="video-feed"
                      onUserMedia={handleCameraReady} 
                      onUserMediaError={handleCameraError}
                    />
                    <IconButton
                      color="primary"
                      aria-label="capture image"
                      onClick={captureImage}
                      className="capture-button"
                    >
                      <CameraIcon
                        style={{ fontSize: "48px", color: "#FCC900" }}
                      />
                    </IconButton>
                  </>
                )}
              </>
            )}
          </div>
        )}

        <div>
          <div className="image-container">
            {loading ? (
              <div className="loading-overlay">
                <CircularProgress style={{ color: "#FCC900" }} />
              </div>
            ) : (
              <>
                {!originalImg && (
                  <div className="placeholder-text">
                    {tabIndex === 0 && (
                      <div className="upload-placeholder">
                        <ImageIcon
                          style={{ fontSize: "48px", color: "#FCC900" }}
                        />
                        <p className="upload-text">Select an image to upload</p>
                      </div>
                    )}
                    {tabIndex === 1 && (
                      <div className="upload-placeholder">
                        <PhotoCamera
                          style={{ fontSize: "48px", color: "#FCC900" }}
                        />
                        <p className="upload-text">Capture from camera</p>
                      </div>
                    )}
                  </div>
                )}

                {originalImg && (
                  <img
                    src={originalImg.src}
                    ref={imgRef}
                    alt="Uploaded"
                    className="uploaded-image"
                  />
                )}
                <canvas ref={canvasRef} className="overlay-canvas" />
              </>
            )}
          </div>

          <p className="instructions">
            <b>Note: </b>Please ensure that the characters in the uploaded or
            captured image are upright, not diagonal, and not flipped, for the
            best transliteration results.
          </p>
        </div>
      </div>

      {loading && <CircularProgress className="circular-progress" />}
      {error && <p className="error-text">{error}</p>}

      {tabIndex === 0 && (
        <div className="upload-section">

          <input
            accept="image/*"
            id="file-upload"
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />

          <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            <button
              type="button"
              className="upload-button"
              onClick={handleButtonClick}
            >
              <UploadFile style={{ marginRight: "5px" }} />
              Upload an Image
            </button>
          </label>
        </div>
      )}
    </div>
  )
}

export default YOLOv8Detection