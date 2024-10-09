import React, { useState } from 'react';
import LessonContentTemplate from '../LessonContentTemplate';
import { BaybayinGuideImages } from '../../../../../values/Media.js';

const IkatlongBakas = ({ lessonTitle }) => {
  const [lessonData, setLessonData] = useState({
    title: 'Ikatlong Bakas',
    contentBlocks: [
      { type: 'text_with_line', text: 'Doctrina Christiana' },
      { type: 'image', assetImagePath: BaybayinGuideImages.doctrinaChristiana },
      {
        type: 'text',
        text: 'Ang Doctrina Christiana ay likha ni Fray Juan de Plancesia noong 1593.',
        boldWords: ['Doctrina Christiana'],
      },
      {
        type: 'text',
        text: 'At ito ang kauna-unahang librong nailimbag sa ating bansa.',
        // boldWords: ['kauna-unahang librong nailimbag'],
      },
      {
        type: 'text',
        text: 'Nilalamán nitó ang mga dasal na:',
        boldWords: ['Nilalamán nitó ang mga dasal na:'],
      },
      {
        type: 'table_2',
        tableData: [
          ['Ang Ama Namin'],
          ['Ang Aba Ginoong Maria'],
          ['Ang Sumampalataya'],
          ['Ang Aba Po'],
        ],
      },
      {
        type: 'text',
        text: 'Ang mga aral na:',
        boldWords: ['Ang mga aral na:'],
      },
      {
        type: 'table_2',
        tableData: [
          ['Ang Sampung Utos'],
          ['Ang Utos ng Santa Iglesya'],
          ['Ang Pitong Sakramento'],
          ['Ang Pitong Punong Kasalanan at kaukulang Pakikinabang'],
          ['Tanungan para sa pangungumpisal'],
        ],
      },
      {
        type: 'text',
        text: 'Nakasulat ito sa Wikang Espanyol, salin sa Tagalog Alpabetong Romano, at maging bersyon ng ating Baybayin.',
        boldWords: ['Nilalamán nitó ang mga dasal na:'],
      },
      {
        type: 'text',
        text: 'Kasalukuyan itong nasa pangangalaga ng Library of Congress sa Washington D.C. sa Estados Unidos, sinusulong ng ating Kongreso na ito ay mapunta sa ating pangangalaga - Dahil sa mga kaguluhan naganap sa panahon ng pananakop sa ating bansa.',
        // boldWords: ['Library of Congress sa Washington D.C.'],
      },
    ],
  });

  return <LessonContentTemplate lessonData={lessonData} />;
};

export default IkatlongBakas;
