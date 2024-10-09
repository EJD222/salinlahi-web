import React, { useState, useEffect } from 'react';
import LessonContentTemplate from '../LessonContentTemplate';
import { BaybayinGuideImages } from '../../../../../values/Media.js';

const IkaAnimNaBakas = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: 'Ika-anim Na Bakas',
    contentBlocks: [
      { type: 'text_with_line', text: 'Butuan Metal Strip' },
      { type: 'image', assetImagePath: BaybayinGuideImages.butuanMetalStrip1 },
      {
        type: 'text',
        text: 'Ang Butuan Metal Strip ay natagpuan noong 1700\'s.',
        boldWords: ['Butuan Metal Strip'],
      },
      {
        type: 'text',
        text: 'Nakita ito ng mga treasure hunters sa loob ng wooden coffin habang sila ay naghahanap ng ginto.',
      },
      {
        type: 'text',
        text: 'Naghahanap sila ng mga ginto dahil maaari itong ibenta ng mahal sa mga private collectors.',
      },
      {
        type: 'text',
        text: 'Ayon kay Dr. Peralta, maraming nakitang wooden coffins sa paligid ng Butuan.',
      },
      {
        type: 'text',
        text: 'May laman ang mga ito na tao sa loob, ang iba ay deformed na at bungo na lamang ang natitira.',
      },
      {
        type: 'text',
        text: 'Ginawa talaga nila ang wooden coffins para ma-contain ang mga katawan ng mga nakahiga roon at likas na ito sa Southern Philippines.',
      },
      {
        type: 'text',
        text: 'Ang metal script ay inukit lamang gamit ang kutsilyo ayon sa mga eksperto.',
      },
      {
        type: 'text',
        text: 'Ang mga letrang natagpuan ay may mga kahulugan, base sa decipher ni Dr. Bonifacio Comandante, ang mga nakalagay rito ay:',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.butuanMetalStrip2 },
      {
        type: 'text',
        text: 'Nakasalin sa Espanyol at kinuha ang Vocabulario de Lengua Tagala bilang reperensya at nakasalin sa Ingles.',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.butuanMetalStrip3 },
      {
        type: 'text',
        text: 'Translation: In war, fight heralding and upholding our Father (Comandante, 2011).',
      },
      {
        type: 'text',
        text: 'Sa Tagalog ay: Sa pakikipagdigma, lumabang iwinawagayway tinataguyod ang ating Panginoon.',
      },
    ],
  });

  return <LessonContentTemplate lessonData={lessonData} />;
};

export default IkaAnimNaBakas;
