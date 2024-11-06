import React, { useContext, useEffect } from "react"
import LessonContext from "../LessonContext"
import LessonContentTemplate from "../LessonContentTemplate"

const AnoNgaBaAngAlibata = () => {
  const { state, dispatch } = useContext(LessonContext)

  useEffect(() => {
    dispatch({ type: "LOAD_LESSON" })
    const lessonData = {
      title: "Ano Nga Ba Ang Alibata?",
      contentBlocks: [
        { type: "text_with_line", text: "Alibata", boldWords: ["Alibata"] },
        {
          type: "text",
          text: "Ang alibata ay isang MALING katawagan na gawa-gawa lamang ni Ginoong Paul Versoza (1914) sa pag-aakalang ang Baybayin ay mula sa arabic script na AliF, Ba, at Ta, tinanggal ang F at dinugtong kaya naging Alibata.",
          boldWords: ["alibata"],
        },
        {
          type: "text",
          text: "Walang anumang batayan si Ginoong Paul Versoza na ito nga ay isang Arabic Script. Kaya hindi ito nararapat na tawaging Alibata.",
          boldWords: ["Ginoong Paul Versoza"],
        },
        {
          type: "text",
          text: "Kung mapapansin, ang Da at Ra ay mayroong iisang karakter o simbolo.",
        },
        {
          type: "text",
          text: "Ito ay dahil sa Allophone.",
          boldWords: ["Allophone."],
        },
        { type: "text_with_line", text: "Allophone", boldWords: ["Allophone"] },
        {
          type: "text",
          text: "Ang allophone ay ang proseso ng pagpapalit ng simbolo ayon sa gamit nito.",
          boldWords: ["allophone"],
        },
        { type: "text", text: "Halimbawa:", boldWords: ["Halimbawa:"] },
        {
          type: "table_4",
          tableData: [
            ["Daw", "Daw", "Raw", "Raw"],
            ["Din", "Din", "Rin", "Rin"],
            ["MaDumi", "Madumi", "MaRumi", "Madumi"],
          ],
        },
      ],
    }
    dispatch({ type: "LESSON_LOADED", payload: lessonData })
  }, [dispatch])

  if (state.loading) return <div>Loading...</div>
  if (state.error) return <div>Error: {state.error}</div>

  return (
    <LessonContentTemplate
      lessonData={state.lessonData}
      categoryKey="category1"
    />
  )
}

export default AnoNgaBaAngAlibata