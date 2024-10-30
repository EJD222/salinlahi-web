import React, { useState } from "react"
import LessonContentTemplate from "../LessonContentTemplate"
import { BaybayinGuideImages } from "../../../../../values/Media.js"

const IkalawangBakas = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Ikalawang Bakas",
    contentBlocks: [
      { type: "text_with_line", text: "Laguna Copperplate Inscription" },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.lagunaCopperplateInscription1,
      },
      {
        type: "text",
        text: "Ito ay natagpuan sa Ilog Wawa sa Laguna noong 1989.",
        // boldWords: ['Ilog Wawa', 'Laguna', '1989'],
      },
      {
        type: "text",
        text: "Nabili ito ng National Museum sa halagang 2000.",
        // boldWords: ['National Museum', '2000'],
      },
      {
        type: "text",
        text: "Ayon sa pag-aaral ang LCI ay noong 822 o 900 AD pa.",
        // boldWords: ['822 o 900 AD'],
      },
      {
        type: "text",
        text: "Ito ay pinag-aralan nina Tiongson at Postma (same transliteration).",
        // boldWords: ['Tiongson', 'Postma'],
      },
      {
        type: "image",
        assetImagePath: BaybayinGuideImages.lagunaCopperplateInscription2,
      },
      {
        type: "text",
        text: "Mula sa larawan, si Tiongson ay nagfocus sa mga pangalan ng lugar na nakaukit dito.",
        // boldWords: ['Tiongson', 'pangalan ng lugar'],
      },
      {
        type: "text",
        text: "Ayon kay Postma, ang nakasulat dito ay ang ating Tagalog Baybayin at Sanskrit. Isa din siyang kawi (distinct sa southeast Asia lalo na sa Java at Sumatra).",
        // boldWords: ['Postma', 'Tagalog Baybayin at Sanskrit'],
      },
      {
        type: "question_with_line",
        text: "Ano kaya ang nais iparating ng mga nakaukit sa LCI?",
        // boldWords: ['Ano kaya ang nais iparating ng mga nakaukit sa LCI?'],
      },
      {
        type: "text",
        text: "Noong unang panahon, ito'y nagsilbi bilang permanenteng dokumento ng deklarasyon na inaabswelto sa pagkakautang ng ginto (lapas hutang) si \"Dang Hwan Namwaran\" at mga kaanak nito ng isang Gobernador, kung kaya't nakasulat ito sa sulat Kawi.",
        // boldWords: ['inaabswelto sa pagkakautang ng ginto (lapas hutang)', '"Dang Hwan Namwaran"'],
      },
      {
        type: "question_with_line",
        text: "Anong klase ng parusa ang maaaring ipataw kapag hindi ka nakapabayad sa iyong pagkakautang noong panahon?",
      },
      {
        type: "text",
        text: "Noon, kahit gaano ka pa kayaman at kataas, kapag nagkaroon ka ng utang at hindi ka nakapagbayad, ito ay may karampatang parusa. Ito ay ang PAGKAKAALIPIN MO at ng IYONG PAMILYA.",
        // boldWords: ['PAGKAKAALIPIN MO', 'IYONG PAMILYA'],
      },
      {
        type: "text",
        text: "Hindi lamang isa ang magiging alipin kung hindi buong pamilya mo.",
      },
      {
        type: "text",
        text: "Nakasulat sa LCI ang kapatawaran ng pagkakautang ng mga Namwaran sa kanyang utang na ginto.",
        // boldWords: ['kapatawaran ng pagkakautang'],
      },
      {
        type: "text",
        text: "Sa oras na masulat ang pangalan dito, ika'y absuwelto na sa iyong pagkakautang.",
      },
    ],
  })

  return <LessonContentTemplate lessonData={lessonData} />
}

export default IkalawangBakas