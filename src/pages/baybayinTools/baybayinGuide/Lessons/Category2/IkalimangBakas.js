import React, { useState } from 'react';
import LessonContentTemplate from '../LessonContentTemplate';
import { BaybayinGuideImages } from '../../../../../values/Media.js';

const IkalimangBakas = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: 'Ikalimang Bakas',
    contentBlocks: [
      { type: 'text_with_line', text: 'UST Deeds of Sale' },
      { type: 'image', assetImagePath: BaybayinGuideImages.deedsOfSale1 },
      {
        type: 'text',
        text: 'Ang UST Deeds of Sale ay kinikilala bilang "Cultural Treasure" ng mga taga-UST at bilang pinakamahaba, pinakamatanda, at kumpletong dokumento na nakasulat sa Baybayin.',
        boldWords: ['UST Deeds of Sale'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.deedsOfSale2 },
      {
        type: 'text',
        text: 'Mayroon itong dalawang baybayin cover or documents. Ang mga dokumentong ito ay naglalaman ng transaksiyon na naganap noong Pebrero 15, 1613 (Unang Bahagi) at ang pangalawang bahagi naman ay noong Disyembre 4, 1625.',
        // boldWords: ['Pebrero 15, 1613 (Unang Bahagi)', 'pangalawang bahagi', 'Disyembre 4, 1625.'],
      },
      {
        type: 'text',
        text: 'Ayon sa mga kwento ng mga taga-UST, 1613 ito ginawa ni Don Capiit, ang dokumento na siya ang nagmamay-ari ng lupa (nakasaad sa unang dokumento) at ikinasal siya kay Donya Francisca Longar na siyang bumili ng lupa noong 1625 (nakasaad naman sa pangalawang dokumento).',
        // boldWords: ['Don Capiit', 'Donya Francisca Longar'],
      },
      {
        type: 'text',
        text: 'Noong namatay si Don Capiit (hindi tiyak na taon, ngunit nasa pagitan ito ng mga taong 1613-1625) muling ikinasal si Donya Francisca Longar sa nagngangalang Don Luis Castilla.',
      },
      {
        type: 'text',
        text: 'Ibinenta ni Don Luis Castilla ang lupa sa UST noong taong 1629, noong napasakorte ito, ay tinanong siya ukol sa pagmamay-ari ng lupa na pinatotohanan nang dalawang dokumento na patunay lamang na pagmamay-ari niya ang nasabing lupa.',
        // boldWords: ['Don Luis Castilla', 'UST'],
      },
      {
        type: 'text',
        text: 'At dahil nga nabili ng UST ang lupa, ang nasabing Deeds of Sale ay nailipat sa kustodiya ng UST.',
        // boldWords: ['nabili ng UST ang lupa', 'Deeds of Sale'],
      },
      {
        type: 'text',
        text: 'Ang Deeds of Sale ngayon ay kasalukuyang nakalagak sa UST Archives.',
        // boldWords: ['UST Archives.'],
      },
    ],
  });

  return <LessonContentTemplate lessonData={lessonData} />;
};

export default IkalimangBakas;
