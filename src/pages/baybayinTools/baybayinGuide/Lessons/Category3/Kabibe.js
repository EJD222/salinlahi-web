import React, { useState } from 'react';
import LessonContentTemplate from '../LessonContentTemplate';
import { BaybayinGuideImages } from '../../../../../values/Media.js';

const Kabibe = ({ lessonTitle }) => {
  const [lessonData] = useState({
    title: "Kabibe",
    contentBlocks: [
      { type: 'text_with_line', text: 'Kabibe' },
      { type: 'image', assetImagePath: BaybayinGuideImages.buntonNgKabibe },
      {
        type: 'text',
        text: 'Ang nasa larawan ay isang haligi na dinisenyuhan ng pinagkainan ng shell o "Shell Maiden" o bunton ng Kabibe',
        boldWords: ['"Shell Maiden"'],
      },
      {
        type: 'text',
        text: 'Bunton - tambak',
        boldWords: ['Bunton - tambak'],
      },
      {
        type: 'text',
        text: 'Napakahalaga ng bunton ng Kabibe noon. Dahil noong unang panahon ginagamit ito ng ating mga ninuno hindi lamang sa pagkain, kundi ginagamit din nila to sa kanilang pagnganganga.',
        boldWords: ['pagnganganga'],
      },
      {
        type: 'text',
        text: 'Sa pagnganganga, hindi pwedeng walang apog dahil ang apog ay nanggagaling sa kabibe.',
      },
      {
        type: 'text',
        text: 'Ito ang nagpapatunay na napakaraming gamit ng Kabibe.',
        boldWords: ['apog', 'nanggagaling sa kabibe.'],
      },
      {
        type: 'text',
        text: 'Una - Sisidlan',
        boldWords: ['Una - Sisidlan'],
      },
      { type: 'image', assetImagePath: BaybayinGuideImages.ngaNga },
      {
        type: 'text',
        text: 'Bago nila gawin ito, sila muna ay pipili ng maari nilang gawing apog.',
      },
      {
        type: 'text',
        text: 'Pagkatapos ng Apog, isasaama na sa paglalagyan ang konting bunga o Areca Catechu (ang katabi ng dahon sa larawan) at babalutin nila ito sa dahon ng ikmo.',
      },
      {
        type: 'text',
        text: 'Matapos balutin, ito\'y kanilang kakainin.',
      },
      {
        type: 'text',
        text: 'Ang Nganga ang naging "staple food" ng ating mga ninuno noon.',
      },
      {
        type: 'text',
        text: 'Tinawag itong staple food dahil kahit na libong taon na ang nagdaan ito pa din ang kinakain ng ating mga ninuno.',
      },
      {
        type: 'text',
        text: 'Hanggang ngayon nga\'y mayroon pa rin nito sa Benguet.',
      },
      {
        type: 'text',
        text: 'Kapag may pagpupulong sila noon, masaya na sila sa nganga at dahil dito, hindi sila nakakaramdam ng gutom.',
      },
      {
        type: 'text',
        text: 'Ganoon katindi ang pagkain noong unang panahon. Wala pa silang palay ngunit paminsan-minsan ay mayroong karne.',
      },
      {
        type: 'text',
        text: 'Ngunit hindi ito ang karne ng anumang hayop.',
      },
      {
        type: 'text',
        text: 'Ang baybayin ayon kay Dr. Comandante ay ritwal at nangangahulugan na ito\'y sagrado.',
        boldWords: ['baybayin', 'Dr. Comandante', 'ritwal'],
      },
      {
        type: 'text',
        text: 'Walang taklobo sa Hebrew kaya hayop ang gamit nila sa alay o ritwal.',
      },
      {
        type: 'text',
        text: 'Samantalang sa Pilipinas, sentro ng biodiversity ang mga "clams" at dito makukuha ang halos 7 sa 9 na klase ng mga Higanteng Kabibe.',
      },
      {
        type: 'text',
        text: 'Kaya para sa mga ninuno natin, ang pagkain ng kabibe ay parang pagkain ng hayop. Ito ang karne noong unang panahon.',
      },
      {
        type: 'text',
        text: 'Bago ito kainin o buksan, ginagamitan ito ng ritwal.',
      },
      {
        type: 'text',
        text: 'Tulad ng mga taga Mindanao na kapag nakakuha ng kabibe ay ginagawan ng ritwal bago kainin.',
      },
    ],
  });

  return <LessonContentTemplate lessonData={lessonData} />;
};

export default Kabibe;
