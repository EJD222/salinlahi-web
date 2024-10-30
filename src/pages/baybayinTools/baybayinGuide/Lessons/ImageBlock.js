import React, { useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import "../../../../styles/baybayinTools/baybayinGuide/Lessons/ImageBlock.css"

const ImageBlock = ({ block }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseModal = () => setIsOpen(false)

  return (
    <div style={{ marginBottom: "15px" }}>
      <div
        onClick={() => setIsOpen(true)}
        style={{ cursor: "pointer", textAlign: "center" }}
      >
        <img
          src={block.imageUrl || block.assetImagePath}
          alt="Content Block"
          className="responsive-thumbnail"
        />
      </div>

      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4.0}
              centerOnInit
              wheel={{ disabled: false }}
              pinch={{ disabled: false }}
              doubleClick={{ disabled: true }}
            >
              <TransformComponent>
                <img
                  src={block.imageUrl || block.assetImagePath}
                  alt="Content Block"
                  style={{
                    width: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageBlock