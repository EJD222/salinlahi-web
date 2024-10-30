import React, { useState } from "react"
import LessonContentTemplate from "../LessonContentTemplate"
import { BaybayinGuideImages } from "../../../../../values/Media.js"

const IkaApatNaBakas = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Ika-apat Na Bakas",
    contentBlocks: [
      { type: "text_with_line", text: "Vocabulario De Lengua Tagala" },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.vocabularioDeLenguaTagala1,
      },
      {
        type: "text",
        text: "Ang Vocabulario De Lengua Tagala ay isinulat ni San Buenaventura noong 1606-1613 kung saan binigyang kahulugan niya ang Baybayin.",
        boldWords: ["Vocabulario De Lengua Tagala"],
      },
      {
        type: "text",
        text: "Ginamit ito upang maging gabay ng ating mga Archeologist. Dahil nagbabasa lang sila ng mga wika sa bato, hindi nila alam kung ano ang ibig sabihin noon. Kaya kumuha sila ng basehan at ginamit ang Vocabulario de Lengua Tagala.",
        // boldWords: ['gabay ng ating mga Archeologist'],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.vocabularioDeLenguaTagala2,
      },
      {
        type: "text",
        text: "Binubuo ito ng 16,350 na salita at 618 na pahina.",
        boldWords: ["16,350 na salita", "618 na pahina."],
      },
      {
        type: "text",
        text: "Ito ang kauna-unahang diksyunaryo na nailimbag sa ating bansa.",
      },
      {
        type: "text",
        text: 'Inilimbag ito ni Tomas Pinpin na kilala bilang "PRINCE OF FILIPINO PRINTERS".',
        // boldWords: ['Tomas Pinpin', '"PRINCE OF FILIPINO PRINTERS"'],
      },
      {
        type: "text",
        text: "Si Tomas Pinpin ay isang Pilipino na may halong Intsik ang lahi, nagmula siya sa Bataan at mayroong sariling museo.",
        // boldWords: ['Tomas Pinpin'],
      },
      {
        type: "text",
        text: "Napakahalagang reperensya nito sa mga KATAGALUGAN.",
        // boldWords: ['KATAGALUGAN'],
      },
      {
        type: "text",
        text: "Dahil sinulat ito ng dalawang pransiskano na nanatili at nanirahan sa Laguna de Bay partikular na si Fray Juan de Placensia (Awtor Ng Doctrina Christiana).",
        // boldWords: ['Fray Juan de Placensia'],
      },
      {
        type: "text",
        text: "Ito ay naiwan na tala o sulat ni Plasencia noong 1578-1590.",
      },
      {
        type: "text",
        text: "Ang mga natapos ni Plasencia ang naging basehan ni San Buenaventura sa Vocabulario.",
      },
      {
        type: "text",
        text: 'Baguhin natin ang paniniwala na "to spell" ang Baybayin. Ano nga ba ang BAYBAYIN?',
        // boldWords: ['Ano nga ba ang BAYBAYIN'],
      },
      {
        type: "question_with_line",
        text: "Ano nga ba ang BAYBAYIN?",
        // boldWords: ['Ano nga ba ang BAYBAYIN'],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.vocabularioDeLenguaTagala3,
      },
      {
        type: "text",
        text: 'ABC (Abece) katumbas ng Baybayin o Tagalog Alphabet. Ibig sabihin ang "Baybayin" ay ang ating Tagalog Alphabet.',
        boldWords: ['"Baybayin"'],
      },
      {
        type: "text",
        text: "Alphabet galing sa Latin, at Latin galing sa Greek na alpha at beta.",
      },
      { type: "text", text: "Magkaiba ang konsepto nila." },
      {
        type: "table_2",
        tableData: [
          ["✓ Alpabeto - titik sa titik"],
          ["✓ Baybayin ay konsepto ng karakter"],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.vocabularioDeLenguaTagala4,
      },
      {
        type: "text",
        text: "Ayon kay Marcilla y Martin, isang dalubhasa sa sulat Tagbanua, ang Baibayin (nasa Vocabulario) ay hindi baybayin.",
        // boldWords: ['Marcilla y Martin', 'Baibayin (nasa Vocabulario) ay hindi baybayin.'],
      },
      {
        type: "text",
        text: 'Dahil konsepto lamang ito ng mga Kastila. At ang baybayin ay "you read and recite or repeat after me" mula sa konsepto ng KATAGALUGAN.',
        boldWords: ['"you read and recite or repeat after me"', "KATAGALUGAN"],
      },
      {
        type: "text",
        text: "Ito ang nais iparating sa atin ng Vocabulario de Lengua Tagala, ngunit hindi ito nabigyan ng tamang pakahulugan.",
      },
    ],
  })

  return <LessonContentTemplate lessonData={lessonData} />
}

export default IkaApatNaBakas