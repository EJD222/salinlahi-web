import React, { useState } from "react"
import LessonContentTemplate from "../LessonContentTemplate"
import { BaybayinGuideImages } from "../../../../../values/Media.js"

const IkawalongBakas = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Ikawalong Bakas",
    contentBlocks: [
      { type: "text_with_line", text: "Bird Clay Figurine" },
      { type: "image", assetImagePath: BaybayinGuideImages.birdClayFigurine1 },
      {
        type: "text",
        text: "Ang nasa larawan ay si Wilhelm G. Solheim II, ang nakatuklas sa Bird Clay Figurine sa Pacaldero Cave sa Palawan noong 2011.",
        boldWords: ["Wilhelm G. Solheim II", "Bird Clay Figurine"],
      },
      {
        type: "text",
        text: "Isang syang American Anthropologist at kinilalang pinakamatandang practitioner sa Archeology sa Southeast Asia.",
      },
      { type: "image", assetImagePath: BaybayinGuideImages.hebrewLamp },
      {
        type: "text",
        text: "Ang Bird Clay Figurine ay isang lampara.",
      },
      {
        type: "text",
        text: "Ayon kay Dr. Bonifacio Comandante, kasabay ito sa paggawa o inukit muna ito bago nila pinainitan.",
      },
      {
        type: "text",
        text: "Posibleng BC din ito dahil ganoon ang lampara ng mga Hebrew.",
      },
      { type: "image", assetImagePath: BaybayinGuideImages.pacalderoFonts },
      {
        type: "text",
        text: "Makikita sa larawan ang Pacaldero Fonts ni William Henry Scott.",
        boldWords: ["Pacaldero Fonts", "William Henry Scott."],
      },
      {
        type: "question_with_line",
        text: "Ano nga ba ang kaugnayan nito sa Bird Clay Figurine?",
      },
      {
        type: "text",
        text: 'Ang Pacaldero Fonts ni William Scott ay mula sa 1984 "The Philippine Syllabic Writing: Pre-hispanic Source Materials."',
        boldWords: ["Pacaldero Fonts"],
      },
      {
        type: "text",
        text: "At ginamit ito upang mabasa ang mga nakasulat sa Bird Clay Figurine dahil nag-rotate ang ibang karakter.",
      },
      { type: "image", assetImagePath: BaybayinGuideImages.birdClayFigurine2 },
      {
        type: "text",
        text: "Lawa - oil",
        boldWords: ["Lawa - oil"],
      },
      { type: "image", assetImagePath: BaybayinGuideImages.birdClayFigurine3 },
      {
        type: "text",
        text: "Halo - birbir o wick",
        boldWords: ["Halo - birbir o wick"],
      },
      { type: "image", assetImagePath: BaybayinGuideImages.birdClayFigurine4 },
      {
        type: "text",
        text: "Galao/galau - butingting o work",
        boldWords: ["Galao/galau - butingting o work"],
      },
      {
        type: "text",
        text: 'Sinasabing ang artifact na ito ay "early lamp" na ginamit ng mga taong nagtatrabaho ng umaga at gabi.',
      },
    ],
  })

  return <LessonContentTemplate lessonData={lessonData} />
}

export default IkawalongBakas