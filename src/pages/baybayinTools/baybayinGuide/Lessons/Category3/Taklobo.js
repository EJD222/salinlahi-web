// src/pages/Taklobo.js

import React, { useState } from 'react';
import LessonContentTemplate from '../LessonContentTemplate';
import { BaybayinGuideImages } from '../../../../../values/Media.js';

const Taklobo = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Taklobo",
    contentBlocks: [
      { type: 'text_with_line', text: 'Taklobo' },
      { type: 'image', assetImagePath: BaybayinGuideImages.vocabularioDeLenguaTagalaKabibe },
      {
        type: 'text',
        text: 'Ang kahulugan ng mga kabibe na nasa larawan:',
        boldWords: ['Ang kahulugan ng mga kabibe na nasa larawan:'],
      },
      {
        type: 'text',
        text: 'Baba – "Inside" o sa loob ng Bunganga',
        boldWords: ['Baba'],
      },
      {
        type: 'text',
        text: 'Maraming kahulugan batay sa 1613 na vocabulario. Ngunit nakadepende na lamang ito sa gamit at pakahulugan.',
      },
      {
        type: 'text',
        text: 'Hindi siya baba - "put down" kung hindi baba - "pasanin."',
        boldWords: ['baba - "pasanin."'],
      },
      {
        type: 'text',
        text: 'Dahil noong unang panahon, mula dalampasigan dadalhin nila ang kabibe sa mataas na lugar na sagrado. Sa southern Tagalog, "Altaran" ang kanilang tawag.',
      },
      {
        type: 'text',
        text: 'Base sa ritwal, ang pagkakasunod-sunod ay: "Ba A o/u Wa Sa Ka Da," pagkatapos ay tuloy-tuloy na ang "A Ba Ka Da"',
      },
      {
        type: 'text_2',
        text: 'O/u(u) at A/a(a) – ginagamit sa ritwal',
        baybayinWords: {
          '(u)': '(u)',
          '(a)': '(a)',
        },
        boldWords: ['O/u', 'A/a'],
      },
      {
        type: 'text',
        text: 'O/u – Boses Ng lalaki',
        boldWords: ['O/u'],
      },
      {
        type: 'text_2',
        text: 'E/i(e) – Matinis ito kaya babae',
        baybayinWords: {
          '(e)': '(e)',
        },
        boldWords: ['E/i'],
      },
      {
        type: 'text',
        text: 'Wawa at Sasa ay placenames. Ibig sabihin kung anong tawag, iyon din ang ibig sabihin ng lugar.',
        boldWords: ['Wawa', 'Sasa'],
      },
      {
        type: 'text',
        text: 'Wawa – Lugar kung saan bumubuka.',
        boldWords: ['Wawa'],
      },
      {
        type: 'text',
        text: 'Sasa – Dito sa lugar na ito ay nakakita ng basag basag na shell o taklobo.',
        boldWords: ['Sasa'],
      },
      {
        type: 'text',
        text: 'Halimbawa ng Sasa ay ang nasa Davao. Sasa ang pangalan ng isang barangay doon at ito ay dating airport.',
      },
      {
        type: 'text',
        text: 'Sa Bohol naman ay Nagsasa - Dahil dito nakakita ng tipak ng shells.',
      },
      {
        type: 'text',
        text: 'Sa Palawan at hilagang Cagayan, partikular sa Lal-lo at Gattaran, ang mga kabibe ay iniipon at ibinubunton.',
      },
      {
        type: 'text',
        text: 'Sa Palawan, replika na lamang na ginawa ng National Museum ang makikita, na nagpapakita ng iba\'t ibang klase ng taklobo na ginamit ng ating mga ninuno.',
      },
      {
        type: 'text',
        text: 'Mangyit – Pinakasikat na shell, halos araw-araw itong kinakain.',
        boldWords: ['Mangyit'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.tridacna },
      {
        type: 'text',
        text: 'Tridacna – Pinakamalaki sa buong mundo.',
        boldWords: ['Tridacna'],
      },
      {
        type: 'text',
        text: 'Ang pinakamalaking nakita na tridacna ay sa Great Barrier Rief sa Australia.',
      },
      {
        type: 'text',
        text: 'Ang pangalawang pinakamalaki ay nakuha sa Northern Palawan at dinala sa isla malapit sa Calaui Island (Busuanga).',
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.hippopus },
      {
        type: 'text',
        text: 'Hippopus o Hagdan Hagdan',
        boldWords: ['Hippopus o Hagdan Hagdan'],
      },
      {
        type: 'text',
        text: 'Ayon sa pag-aaral, sa katunayan, marami naman tayong malalaking taklobo. Ngunit, nauubos ang mga ito dahil hilig daw natin kumain.',
        boldWords: ['Hippopus o Hagdan Hagdan'],
      },
      {
        type: 'text',
        text: 'Kaka – Malaki o Amain',
        boldWords: ['Kaka'],
      },
      {
        type: 'text',
        text: 'Dahil pag nag-alay dapat sariwa at mukhang malusog.',
      },
      {
        type: 'text_2',
        text: 'Da/Ra(da) – Tusok o pagpapadugo. Puti ang dugo ng taklobo dahil wala silang hemoglobin. Tutusukin pababa mula sa bukasan upang bumuka.',
        baybayinWords: {
          '(da)': '(da)',
        },
        boldWords: ['Da/Ra'],
      },
      {
        type: 'text_2',
        text: 'Nana(na) – Katas ng taklobo na kulay puti na kinukuha at iniinom dahil masustansya.',
        baybayinWords: {
          '(na)': '(na)',
        },
        boldWords: ['Nana'],
      },
      {
        type: 'text',
        text: 'Napakaganda ng taklobo dahil mayroon itong mga microscopic na hayop sa loob nito na nakakagawa ng photosynthesis. Ang taklobo ay bubuka upang kumuha ng araw, at ang microscopic na hayop na ito ang gagawa ng pagkain para sa taklobo.',
        boldWords: ['photosynthesis'],
      },
      {
        type: 'text',
        text: 'Zooxanthellae ang tawag sa microscopic na hayop na iyon.',
        boldWords: ['Zooxanthellae'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.adductorMuscles },
      {
        type: 'text',
        text: 'Ang Zooxanthellae ay nagbibigay ng carbohydrates sa coral sa pamamagitan ng photosynthesis, na nagiging direktang mapagkukunan para sa pag-unlad at pagtatayo ng kaltsyum carbonate na skeleton nito. Bilang kapalit, ang coral host ay nagbibigay sa mga zooxanthellae ng mga nutrients at isang protektadong kapaligiran.',
      },
      {
        type: 'text_2',
        text: 'Gaga(ga) – nangangahulugang ipakita o ibuka. Ngunit kapag hinati, hindi mahahati ang laman dahil ang laman ay nasa isang bahagi lamang.',
        baybayinWords: {
          '(ga)': '(ga)',
        },
        boldWords: ['Gaga'],
      },
      {
        type: 'text',
        text: 'Hindi ito isang organismo na makikita; sobrang liit nito at hindi nakikita gamit ang mata lamang.',
      },
      {
        type: 'text_2',
        text: 'Nganga(nga) – Bubuka ang taklobo, kakanta ang babae',
        baybayinWords: {
          '(nga)': '(nga)',
        },
        boldWords: ['Nganga'],
      },
      {
        type: 'text_2',
        text: 'Mama(ma) – Alam naman natin na pagkain ang tinutukoy dahil kapag ang isang sanggol ay tumawag ng "Mama," nangangahulugan ito na siya ay nagugutom.',
        baybayinWords: {
          '(ma)': '(ma)',
        },
        boldWords: ['Mama'],
      },
      {
        type: 'text_2',
        text: 'Haha(ha) – Pagnganga',
        baybayinWords: {
          '(ha)': '(ha)',
        },
        boldWords: ['Haha'],
      },
      {
        type: 'text_2',
        text: 'Papa(pa) – Dagdag',
        baybayinWords: {
          '(pa)': '(pa)',
        },
        boldWords: ['Papa'],
      },
      {
        type: 'text_2',
        text: 'Yaya(ya) – Pagmamano o pamamaalam',
        baybayinWords: {
          '(ya)': '(ya)',
        },
        boldWords: ['Yaya'],
      },
      {
        type: 'text',
        text: 'Mapapansin na ang pagkakasunod-sunod ng Baybayin ay tila sumusunod sa isang kwento ng ritwal.',
        boldWords: ['Zooxanthellae'],
      },
    ],
  });

  return <LessonContentTemplate lessonData={lessonData} />;
};

export default Taklobo;
