import React, { useState } from 'react';
import LessonContentTemplate from '../LessonContentTemplate';
import { BaybayinGuideImages } from '../../../../../values/Media.js';

const HomoSapiens = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Home Sapiens",
    contentBlocks: [
      { 
        type: 'text_with_line', 
        text: 'Homo Sapiens' 
      },
      { 
        type: 'image', 
        assetImagePath: BaybayinGuideImages.homoSapiens 
      },
      { 
        type: 'text',
        text: 'Ang larawan ay mula sa HOPSea noong 2007 na nakabase sa France.',
        // boldWords: ['HOPSea'],
      },
      { 
        type: 'text',
        text: 'Wala ito sa lektura ni Dr. Comandante kaya naman sinubukan itong aralin ng punong tagapagtaguyod ng Awanggan na si G.DAREL CABULING.',
        // boldWords: ['G.DAREL CABULING.'],
      },
      { 
        type: 'text',
        text: 'Ang Homo Sapien ay mula sa salitang "Sapien" sa latin ay "Wise" o "pantas" na talino.',
        boldWords: ['Homo Sapien', '"Sapien"', '"Wise"', '"pantas" na talino'],
      },
    ],
  });

  return <LessonContentTemplate lessonData={lessonData} />;
};

export default HomoSapiens;
