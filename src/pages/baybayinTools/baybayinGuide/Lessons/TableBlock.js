import React from "react"
import PropTypes from "prop-types"
import { mapToBaybayinCustomFont } from "../../../../utils/MapToBaybayinCustomFont"

const TableBlock = ({ block }) => {
  const tableData = block?.tableData || []

  const determineTextStyle = (rowIndex, columnIndex) => {
    if (rowIndex === 0) {
      if (block.type === "table_1" || block.type === "table_3") {
        return { fontWeight: "bold" }
      } else if (block.type === "table_4" || block.type === "table_5") {
        return columnIndex === 1 || columnIndex === 3
          ? { fontFamily: "BaybayinNeue" }
          : {}
      } else if (block.type === "table_2") {
        return { fontFamily: "Inter" }
      }
      return {}
    } else {
      if (block.type === "table_1" && columnIndex === 1) {
        return { fontFamily: "BaybayinNeue" }
      } else if (
        (block.type === "table_4" &&
          (columnIndex === 1 || columnIndex === 3)) ||
        (block.type === "table_5" && columnIndex === 1) ||
        (block.type === "table_3" && columnIndex === 2 && rowIndex >= 1)
      ) {
        return { fontFamily: "BaybayinNeue" }
      } else if (block.type === "table_2") {
        return { fontFamily: "Inter" }
      }
      return {}
    }
  }

  const getDisplayText = (cell, rowIndex, columnIndex) => {
    if (
      rowIndex >= 1 &&
      ((block.type === "table_1" && columnIndex === 1) ||
        (block.type === "table_4" &&
          (columnIndex === 1 || columnIndex === 3)) ||
        (block.type === "table_3" && columnIndex === 2) ||
        (block.type === "table_5" && columnIndex === 1))
    ) {
      return mapToBaybayinCustomFont(cell)
    }
    return cell
  }

  const determineCellPadding = (rowIndex, columnIndex) => {
    if (
      (rowIndex >= 1 && block.type === "table_1" && columnIndex === 1) ||
      (block.type === "table_4" && (columnIndex === 1 || columnIndex === 3)) ||
      (block.type === "table_3" && columnIndex === 2 && rowIndex >= 1) ||
      (rowIndex >= 0 && block.type === "table_5" && columnIndex === 1)
    ) {
      return "5px 10px"
    }
    return "5px"
  }

  return (
    <div style={{ marginBottom: "15px" }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td
                  key={columnIndex}
                  style={{
                    padding: determineCellPadding(rowIndex, columnIndex),
                    textAlign: "center",
                    border: "1px solid #ccc",
                    ...determineTextStyle(rowIndex, columnIndex),
                  }}
                >
                  {getDisplayText(cell, rowIndex, columnIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

TableBlock.propTypes = {
  block: PropTypes.shape({
    type: PropTypes.string,
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }),
}

TableBlock.defaultProps = {
  block: { tableData: [] },
}

export default TableBlock