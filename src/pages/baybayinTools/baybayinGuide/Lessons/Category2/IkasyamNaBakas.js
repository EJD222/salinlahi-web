import React, { useState } from "react"
import LessonContentTemplate from "../LessonContentTemplate"
import { BaybayinGuideImages } from "../../../../../values/Media.js"

const formatTextWithLineBreaks = (text) => {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))
}

const IkasyamNaBakas = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Ikasyam Na Bakas",
    contentBlocks: [
      { type: "text_with_line", text: "Calatagan Pot" },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot1 },
      {
        type: "text",
        text: "Ang Calatagan Pot ay natagpuan noong 14th-16th Century sa Batangas noong 1958.",
        boldWords: ["Calatagan Pot"],
      },
      {
        type: "text",
        text: "Binenta ng anim na piso (₱6) kay Alfredo Evangelista",
      },
      {
        type: "text",
        text: "Kinalaunan, binili ito ng Anthropological Foundation of the Philippines noong 1961 at dinonate sa National Museum.",
      },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot2 },
      {
        type: "text",
        text: "Kinumpara rin dito ang Suwat ng Mindoro at Suwat ng Palawan.",
      },
      { type: "text_with_line", text: "Ang nilalaman ng Calatagan Pot" },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot3 },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot4 },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot5 },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot6 },
      {
        type: "table_2",
        tableData: [
          ["1st Segment", "o ina bisa nga-a (ngawa)"],
          ["SB1613", "oo, madre, ponzona, voices/shout"],
          ["Tagalog", "Ibunyag Ina ng Bagsik na Tunay"],
          ["Ingles", "Broadcast this real mother of ill"],
        ],
      },
      {
        type: "text",
        text: "Ang SB1614 ay si San Buenventura, ang lumikha ng Vocabulario De Lengua Tagala. Ibig sabihin, ginamit din ito upang mas mabigyang kahulugan ang nilalaman ng Calatagan Pot.",
      },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot7 },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot8 },
      {
        type: "table_2",
        tableData: [
          ["2nd Segment", "gona, ngi-a/ngiwa, halaba"],
          ["SB1613", "sugat, hiwa- voices/ cry morder (bite)"],
          ["Tagalog", "Labanan mag-ingay isugat"],
          ["Ingles", "Write make noise and fight"],
        ],
      },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot9 },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot10 },
      {
        type: "table_2",
        tableData: [
          ["3rd Segment", "taya, sala, nganga-i"],
          ["SB1613", "curar (cure), cuenta (account), abrir (open)"],
          ["Tagalog", "Buksan tuklasin ang lunas"],
          ["Ingles", "Account open the cure"],
        ],
      },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot11 },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot12 },
      {
        type: "table_2",
        tableData: [
          ["4th Segment", "dadala, ni, manogi"],
          ["SB1613", "alhajas, de (of), governador"],
          ["Tagalog", "Tagapamahala ng Hiyas"],
          ["Ingles", "Governor of Gems"],
        ],
      },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot13 },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot14 },
      {
        type: "table_2",
        tableData: [
          ["5th Segment", "Ngi-a, sana, mabasa"],
          ["SB1613", "hiwa (voices), as if we told you, bow head to read"],
          ["Tagalog", "Matuklasan nawa ang sambit"],
          ["Ingles", "Let the prayer be known"],
        ],
      },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot15 },
      { type: "image", assetImagePath: BaybayinGuideImages.calataganPot16 },
      {
        type: "table_2",
        tableData: [
          ["6th Segment", "baga, ngipo, pa"],
          ["SB1613", "voices, pouted lips, even"],
          ["Tagalog", "Kahit tinig sa labing tikom"],
          ["Ingles", "Even voices from pouted lips"],
        ],
      },
      {
        type: "text",
        text: "Buong Pinapahayag ng Calatagan Pot Inscription:",
        boldWords: ["Buong Pinapahayag ng Calatagan Pot Inscription:"],
      },
      {
        type: "table_2",
        tableData: [
          [
            formatTextWithLineBreaks(
              "Broadcast this real mother of ill\nWrite make noises and fight\nAccount open the cure\nGovernor of gems\nLet the prayer be known\nEven voices from pouted lips.",
            ),
          ],
        ],
      },
      {
        type: "text",
        text: "Sa kabuuan ay may apatnapu (40) na mga simbolong nakaukit sa Calatagan Pot.",
      },
      {
        type: "text",
        text: 'Ang Calatagan Pot ay Pasawad at Inglaw na ang ibig sabihin ay "Warnings of Epidemic."',
      },
      {
        type: "text",
        text: "Ayon kay Ginoong Yabes noong 1999, napakaimportante ng mga inscription na nakaukit dito dahil ito ay may iba't-ibang uri ng notices, ito ay ang:",
      },
      {
        type: "table_2",
        tableData: [
          ["Tuturan", "serving notices"],
          ["Tingkaga", "summoning an assembly"],
          ["Bawal", "announcing a prohibition"],
          ["Tabang", "calling assistance"],
          ["Ukuman", "passing a judgement"],
          ["Pasawad at Inglaw", "warnings of an epidemic"],
        ],
      },
      {
        type: "text",
        text: "Ito ang mga main function ng mga Tagbanua's Purpose of Script para ipagbigay alam sa karamihan ang nangyayari.",
      },
      {
        type: "text",
        text: "Ayon kay Dr. Comandante (2010), ito ay naglalaman ng babala para sa paparating na epidemya.",
      },
    ],
  })

  return <LessonContentTemplate lessonData={lessonData} />
}

export default IkasyamNaBakas