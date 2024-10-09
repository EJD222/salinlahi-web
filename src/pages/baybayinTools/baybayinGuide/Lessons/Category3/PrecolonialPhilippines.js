// src/pages/PreColonialPhilippines.js

import React, { useState } from 'react';
import LessonContentTemplate from '../LessonContentTemplate';
import { BaybayinGuideImages } from '../../../../../values/Media.js';

const PreColonialPhilippines = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Precolonial Philippines",
    contentBlocks: [
      { type: 'text_with_line', text: 'Precolonial Philippines' },
      { type: 'image', assetImagePath: BaybayinGuideImages.povedanoCalendar },
      {
        type: 'text',
        text: 'Ang "Povedano Calendar" ay nakasulat sa balat ng hayop, partikular sa balat ng usa.',
        boldWords: ['"Povedano Calendar"'],
      },
      {
        type: 'text',
        text: 'Sinasabi ng maraming Muslim na ito ay nakasulat sa balat ng kambing, ngunit noong panahong iyon, hindi naman karamihan sa mga tao ay Muslim. Ang marami lang ay usa.',
      },
      {
        type: 'text',
        text: 'Ang pagbasa ng Povedano Calendar ay mula sa ibaba paitaas at mula kanan pakaliwa.',
      },
      {
        type: 'text',
        text: 'Ito ay isa sa mga gamit ng mga eksperto ngayon upang mai-transliterate ang iba\'t ibang bakas ng Baybayin.',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.viennaCodex },
      {
        type: 'text',
        text: 'Ang Vienna Codex ay isang Spanish-Tagalog dictionary na kasalukuyang nasa Austria.',
        boldWords: ['Vienna Codex'],
      },
      {
        type: 'text',
        text: 'Sa kabilang banda, walang matibay na saliksik tungkol sa Paris Codex, ngunit ayon kay G. Darel, maaaring ito ay tala na naiwan ni Plasencia noong (1578-1590) bago siya namatay, at ginamit ni San Buenaventura bilang batayan sa kanyang Vocabulario de la lengua tagala.',
      },
      {
        type: 'text',
        text: 'Ang Paris Codex ay kasalukuyang nasa France.',
        boldWords: ['Paris Codex'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.sinupuanNgWikangTagalog },
      {
        type: 'text',
        text: 'Ito ay isang paghahambing ng Povedano sa 1939 Sinupan ng Wikang Tagalog.',
      },
      {
        type: 'text',
        text: 'Sa obserbasyon, tama nga naman na 12 dahil ang kalendaryo ng ating mga ninuno noon ay nakabatay sa buwan, at sa isang buwan, isang beses lamang maaaring magkaroon ng full moon.',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.povedanoCalendarDetails },
      {
        type: 'text',
        text: 'Ito ang nakasulat sa Povedano Calendar: Nangunguna ang Nobyembre dahil kapag tumaas ang dagat doon sila naghahanap ng kaingin. Pagdating ng Disyembre, ito ang pinakamataas na tide.',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.sinaunangAraw },
      {
        type: 'text',
        text: 'Ayon kay Guillermo, ito ang tawag sa sinunang mga araw bago tayo magkaroon ng mga pangalang tulad ng Lunes, Martes, Miyerkules, at iba pa.',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.bulilang },
      {
        type: 'text',
        text: 'Ito naman ang tinatawag nilang Bulilag (bulilang). Maling katawagan ito para sa Baybayin numerals, dahil walang sapat na patunay o pruweba (tulad ng mga artifacts) na nagsusuporta dito.',
        boldWords: ['Bulilag (bulilang)', 'Baybayin numerals'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.basehanNgBulilang },
      {
        type: 'text',
        text: 'Sa Sinupan ng Wikang Tagalog makikita ang pinagbasehan ng Bulilag.',
      },
      {
        type: 'text',
        text: 'Ito rin ang basehang ginamit ni Dr. Comandante sa pagsulat ng Pamilangan.',
        boldWords: ['Dr. Comandante'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.bulilangTaklobo },
      {
        type: 'text',
        text: 'Ang Pamilangan ay makikita rin sa Taklobo at sa Angono Petroglyphs. Ayon kay Dr. Comandante, kung ang Baybayin ay nasa Taklobo, dapat ang mga numerals nito ay nasa Taklobo rin.',
        boldWords: ['Pamilangan'],
      },
      {
        type: 'text',
        text: 'Sa kabuuan, ginamit ang Baybayin sa pagsulat at pagdarasal.',
      },
      {
        type: 'text',
        text: 'Noong 1668, tuluyang nawala ang Baybayin, at tanging ang mga manggagamot at babaylan na lamang ang natira.',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.unangLibroBata },
      {
        type: 'text',
        text: 'Ito ang makikita sa unang libro sa Pilipinas. Ang nakalagay sa kanyang armas ay "Bata," na may literal na pakahulugan.',
        boldWords: ['"Bata,"'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.unangLibroUha1 },
      {
        type: 'text',
        text: 'Ang makikita rito ay "Uha," katulad ng artifact na Angono Petroglyphs. Ang "Uha" ay kanilang panambitan o kagustuhan. Kung mapapansin, ito ay malapit sa sinag ng araw.',
        boldWords: ['"Uha,"', 'panambitan o kagustuhan'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.unangLibroUha2 },
      {
        type: 'text',
        text: 'Tunay ngang napakarelihiyoso ng ating mga ninuno. Ang ibig sabihin nito ay pagkilala sa ama na nasa taas, na nagbibigay ng liwanag.',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.comintang },
      {
        type: 'text',
        text: 'Walang katotohanan na inaral ng mga Pilipino ang lenggwahe ng mga Instik; sa halip, sila ang nag-aral ng Lingua Franca. Ang mga Intsik ang nag-aral ng mga wika ng kanilang pinupuntahan.',
      },
      {
        type: 'text',
        text: 'Inaaral ng mga Intsik ang mga wika ng kanilang pinupuntahan. Kaya nang dumating ang mga sila sa Pilipinas, inaral nila ang Baybayin at ang wika ng bansa.',
      },
    ],
  });

  return <LessonContentTemplate lessonData={lessonData} />;
};

export default PreColonialPhilippines;
