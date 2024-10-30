import React, { useState } from "react"
import LessonContentTemplate from "../LessonContentTemplate"
import { BaybayinGuideImages } from "../../../../../values/Media.js"

const UnangBakas = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Unang Bakas",
    contentBlocks: [
      { type: "text_with_line", text: "Angono Petroglyphs" },
      { type: "image", assetImagePath: BaybayinGuideImages.angonoPetroglyphs1 },
      {
        type: "text",
        text: "Ang Angono Petroglyphs ay natagpuan sa Angono Rizal noong 1965.",
        boldWords: ["Angono Petroglyphs"],
      },
      {
        type: "text",
        text: "Ayon sa Philippine National Museum ang naturang Petroglyphs ay nadeterminang panahong neolitiko na sa taong 2000-6000 BC.",
      },
      {
        type: "table_2",
        tableData: [
          ["3000 BC", "Cave Interior"],
          ["2500 BC", "Angono Inscription"],
        ],
      },
      {
        type: "text",
        text: 'Natagpuan ito noong Marso 1965 ni Carlos "Botong" Francisco.',
      },
      { type: "image", assetImagePath: BaybayinGuideImages.angonoPetroglyphs2 },
      {
        type: "text",
        text: "Nakaukit dito ang mga hugis tao, palaka o butuki. At sinasabing nakakapagpapagaling daw itong kwebang ito.",
      },
      { type: "image", assetImagePath: BaybayinGuideImages.pamilangan },
      {
        type: "text",
        text: "Ngunit, ayon kay Dr. Bonifacio Comandante, mayroong nakaukit na mga Baybayin dito pati na rin ang Pamilangan.",
      },
      {
        type: "question_with_line",
        text: "Ano nga ba ang nais iparating ng mga nakaukit sa Angono Petroglyphs?",
        boldWords: [
          "Ano nga ba ang nais iparating ng mga nakaukit sa Angono Petroglyphs?",
        ],
      },
      {
        type: "text",
        text: "Ayon sa libro na Baybayin Ancient Filipino Script, ang nakaukit sa Angono Petroglyphs ay mga pahiwatig ng ating mga ninuno sa kanilang abilidad.",
        boldWords: [
          "Ano nga ba ang nais iparating ng mga nakaukit sa Angono Petroglyphs?",
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.pregnantWomanOfAngono,
      },
      {
        type: "text",
        text: 'The Pregnant Women of Angono (Comandante, 2010) - Katulad na lamang ng The Pregnant Women of Angono kung saan mayroong eskripto na "na" kaya ito nabansagang babae dahil malaki ang tiyan nito.',
        boldWords: ["Pregnant Women of Angono (Comandante, 2010)"],
      },
      {
        type: "text",
        text: "Pinakita rin dito ang kanilang mga panambitan (kagustuhan at nararamdaman).",
        boldWords: ["Pregnant Women of Angono (Comandante 2010)", '"na"'],
      },
      { type: "image", assetImagePath: BaybayinGuideImages.babaEiNana1 },
      { type: "image", assetImagePath: BaybayinGuideImages.babaEiNana2 },
      {
        type: "table_2",
        tableData: [
          ["Ba", "Isang Catalonan o pari"],
          ["E/I", "Isang Catalonan o pari"],
          ["Na", "Isang babae"],
          ["O/U at Haha", 'Read as "uha" : Panambitan o Kagustuhan'],
          ["Da at Ma", "Kanilang nararamdaman"],
        ],
      },
    ],
  })

  return <LessonContentTemplate lessonData={lessonData} />
}

export default UnangBakas