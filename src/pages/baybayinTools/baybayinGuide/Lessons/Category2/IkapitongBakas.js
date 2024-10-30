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

const IkapitongBakas = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Ikapitong Bakas",
    contentBlocks: [
      { type: "text_with_line", text: "Monreal Stones" },
      { type: "image", assetImagePath: BaybayinGuideImages.monrealStones },
      {
        type: "text",
        text: "Ang Monreal Stones ay natagpuan ng mga taga-Rizal Elementary School sa Ticao, Masbate.",
        boldWords: ["Monreal Stones", "Ticao, Masbate."],
      },
      {
        type: "text",
        text: "Ang Monreal stone ay mayroong dalawang bahagi. Ito ay ang Side A at Side B.",
        boldWords: ["Monreal Stones", "Ticao, Masbate."],
      },
      {
        type: "table_2",
        tableData: [
          ["Side A", "May 52 na karakter"],
          ["Side B", "May 78 na karakter"],
        ],
      },
      {
        type: "question_with_line",
        text: "Ngunit, ayon sa naging pag-aaral. Naging masalimuot ang kasaysayan ng artifact na ito. Bakit kaya?",
      },
      {
        type: "text",
        text: "Ayon kay Dr. Bonifacio Comandante, naghahanap ng maaaring maging tapakan ang isang guro para sa kaniyang mga estudyante upang magsilbing pagpagan ng kanilang mga tsinelas sa pagpasok sa loob ng silid-aralan.",
        boldWords: ["Dr. Bonifacio Comandante"],
      },
      {
        type: "text",
        text: "Hindi kayo nagkamali ng basa, sapagkat ito ay nagsilbing apakan ng mga estudyante sa isang paaralan.",
      },
      {
        type: "text",
        text: "Kalaunan ay nadiskubre ng principal ang inscription na naka-ukit dito, at dinala sa Pambansang Museo noong Oktubre 2011.",
        boldWords: ["Pambansang Museo", "Oktubre 2011"],
      },
      {
        type: "text",
        text: "Ayon sa mga pananaliksik ay dinicipher ito ng isang Bisaya, hanggang naging Bikolano. Ngunit ayon din sa pagsasaliksik ang Ticao at Masbate ay Bikolano at hindi Bisaya. May pagkakahalintulad ang Baybayin (Tagalog) at Basahan (Bikolano).",
        boldWords: ["isang Bisaya"],
      },
      {
        type: "text",
        text: "Kung kaya't minarapat lamang ng mga mananaliksik na tawaging Suwat Ophir, dahil sa pagkakahalintulad nito.",
        boldWords: ["Suwat Ophir"],
      },
      {
        type: "text",
        text: "Ang Suwat Ophir ay terminong ginamit nila dahil parehong iskripto ay nagmula sa ating bansa.",
        boldWords: ["Suwat Ophir"],
      },
      {
        type: "text",
        text: "Babasahin ito ng RIGHT to LEFT MANNER dahil noong unang panahon ay mas dominant ang kanang kamay at mas may pwersa sa pag-ukit sa bato.",
        boldWords: ["RIGHT to LEFT MANNER"],
      },
      { type: "text_with_line", text: "MONREAL STONE SIDE A" },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideALine1,
      },
      {
        type: "table_2",
        tableData: [
          ["Line 1", "na la ho ta ba ga u ta na a"],
          ["Kahulugan", "Itong biglang dilim bilis ng pagsagwan"],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideALine2,
      },
      {
        type: "table_2",
        tableData: [
          ["Line 2", "la ha l la ha ba na a ta da"],
          ["Kahulugan", "Agos agos tanawin nating lahat"],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideALine3,
      },
      {
        type: "table_2",
        tableData: [
          ["Line 3", "na ya ha ba na ga sa ka"],
          ["Kahulugan", "Likas na takot labanan mo"],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideALine4,
      },
      {
        type: "table_2",
        tableData: [
          ["Line 4", "ha ya ka ya l ha yu ta"],
          ["Kahulugan", "Naito silayan ng banayad"],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideALine5,
      },
      {
        type: "table_2",
        tableData: [
          ["Line 5", "na ka a ta u la ma na"],
          ["Kahulugan", "Iwaksi nang tuluyang mawaglit"],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideALine6,
      },
      {
        type: "table_2",
        tableData: [
          ["Line 6", "ya na la ka ha la"],
          ["Kahulugan", "Taglayin ang takip sa takot"],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideALine7,
      },
      {
        type: "table_2",
        tableData: [
          ["Line 7", "ma na a"],
          ["Kahulugan", "Pansinin"],
        ],
      },
      {
        type: "text",
        text: formatTextWithLineBreaks(
          "Buong nilalaman ng Monreal Stone Side A",
        ),
        boldWords: ["Buong nilalaman ng Monreal Stone Side A"],
      },
      {
        type: "table_2",
        tableData: [
          [
            formatTextWithLineBreaks(
              `"Itong biglang dilim bilis ng pag sagwan\nAgos agos tanawin nating lahat\nLikas na takot labanan mo\nNaito silayan ng banayad\nIwaksi nang tuluyang mawaglit\nTaglayin ang takip sa takot\nPansinin"`,
            ),
          ],
        ],
      },
      { type: "text_with_line", text: "MONREAL STONE SIDE B" },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine1,
      },
      {
        type: "table_2",
        tableData: [
          [
            "Line 1",
            "ha na ta ngu sa sa a ba ha nga ma l da",
            formatTextWithLineBreaks(
              "Iwaksi alisin ang nasa isip\nBatiin hanga-an ang mga kalaliman",
            ),
          ],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine2,
      },
      {
        type: "table_2",
        tableData: [
          [
            "Line 2",
            "ma l da yo na la ka u ta ha ba l na",
            formatTextWithLineBreaks(
              "Mga kalalimang banayad na lakbayin\nAting mahabang inatin",
            ),
          ],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine3,
      },
      {
        type: "table_2",
        tableData: [
          [
            "Line 3",
            "ga ma l da pa ka ya l ha ta",
            "Balakang nasadlak wari Ina ng palo",
          ],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine4,
      },
      {
        type: "table_2",
        tableData: [
          ["Line 4", "ha ya ka ya l ha yu ta", "Tingala kampay babae pumanaw"],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine5,
      },
      {
        type: "table_2",
        tableData: [
          [
            "Line 5",
            "ba ya I nga a nga ta ha",
            "Tunog ng banayad magandang kain",
          ],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine6,
      },
      {
        type: "table_2",
        tableData: [
          [
            "Line 6",
            "ba l na ha na ha ba ha pa I ka",
            "Dayang nahaan palagay pa siya",
          ],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine7,
      },
      {
        type: "table_2",
        tableData: [
          [
            "Line 7",
            "ma l ngu a nga la ga",
            formatTextWithLineBreaks(
              "Galing babae ngoya tanto lata (Ito ay kagalingan ng isang babae na nagbibigay inspirasyon).",
            ),
          ],
        ],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine8,
      },
      {
        type: "table_2",
        tableData: [["Line 8", "ma na sa a ta", "Bagay hangad natin"]],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.monrealStoneSideBLine9,
      },
      {
        type: "table_2",
        tableData: [["Line 9", "ngu la ga ta", "Tulala lata natin"]],
      },
      {
        type: "text",
        text: formatTextWithLineBreaks(
          "Buong nilalaman ng Monreal Stone Side B",
        ),
        boldWords: ["Buong nilalaman ng Monreal Stone Side B"],
      },
      {
        type: "table_2",
        tableData: [
          [
            formatTextWithLineBreaks(
              `"Iwaksi alisin ang nasa isip\nBatiin hanga-an ang mga kalaliman\nMga kalalimang banayad na lakbayin\nAting mahabang inatin\nBalakang nasadlak wari Ina ng palo\nTingala kampay babae pumanaw\nTunog ng banayad magandang kain\nDayang nahaan palagay pa siya\nGaling babae ngoya tanto lata\nBagay hangad natin\nTulala lata natin"`,
            ),
          ],
        ],
      },
    ],
  })

  return <LessonContentTemplate lessonData={lessonData} />
}

export default IkapitongBakas