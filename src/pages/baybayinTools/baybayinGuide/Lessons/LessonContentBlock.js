import React from "react"
import TextBlock from "./TextBlock"
import TableBlock from "./TableBlock"
import DropdownBlock from "./DropDownBlock"
import QuestionWithLineBlock from "./QuestionWithLineBlock"
import TextWithLineBlock from "./TextWithLineBlock"
import ExclamationWithLineBlock from "./ExclamationWithLineBlock"
import ImageBlock from "./ImageBlock" 

import "../../../../styles/baybayinTools/baybayinGuide/Lessons/LessonContentBlock.css"

const LessonContentBlock = ({ block, onDropdownInteraction }) => {
  switch (block.type) {
    case "text":
    case "text_2":
      return <TextBlock block={block} />

    case "text_with_line":
      return <TextWithLineBlock text={block.text} showLine={true} />

    case "image":
      return <ImageBlock block={block} />

    case "table_1":
    case "table_2":
    case "table_3":
    case "table_4":
    case "table_5":
      return <TableBlock block={block} />

    case "dropdown":
      return (
        <DropdownBlock
          title={block.dropdownSection.title}
          content={block.dropdownSection.content}
          onDropdownInteraction={onDropdownInteraction}
        />
      )

    case "question_with_line":
      return <QuestionWithLineBlock block={block} showLine={true} />

    case "exclamation_with_line":
      return <ExclamationWithLineBlock text={block.text} showLine={true} />

    default:
      return null
  }
}

export default LessonContentBlock
