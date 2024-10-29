import React, { useContext, useEffect } from 'react';
import LessonContext from '../LessonContext';
import LessonContentTemplate from '../LessonContentTemplate';

const PanutuntunanNgBaybayin = ({ lessonTitle }) => {
  const { state, dispatch } = useContext(LessonContext);

  useEffect(() => {
    dispatch({ type: 'LOAD_LESSON' });

    const lessonData = {
      title: 'Panutuntunan ng Baybayin',
      contentBlocks: [
        {
          type: 'text',
          text: 'Pitong (7) Panutuntunan ng Baybayin.',
        },
        {
          type: 'dropdown',
          dropdownSection: {
            title: 'Unang Panuntunan',
            content: [
              {
                type: 'text',
                text: 'Unang Panuntunan: Isalin sa wikang Filipino ang mga salita kung ito ay salitang banyaga.',
                boldWords: ['Unang Panuntunan:'],
              },
              {
                type: 'text',
                text: 'Halimbawa sa pangalan ng tao:',
                boldWords: ['Halimbawa sa pangalan ng tao:'],
              },
              {
                type: 'table_3',
                tableData: [
                  ['Salita', 'Tagalog', 'Baybayin'],
                  ['John', 'Huwan', 'Huwan'],
                  ['Joy', 'Ligaya', 'Ligaya'],
                  ['Peter', 'Pedro', 'Pedro'],
                ],
              },
              {
                type: 'text',
                text: 'Halimbawa naman ng hayop:',
                boldWords: ['Halimbawa naman ng hayop:'],
              },
              {
                type: 'table_3',
                tableData: [
                  ['Salita', 'Tagalog', 'Baybayin'],
                  ['Cat', 'Pusa', 'Pusa'],
                  ['Dog', 'Aso', 'Aso'],
                  ['Bird', 'Ibon', 'Ibon'],
                  ['Cow', 'Baka', 'Baka'],
                ],
              },
              {
                type: 'text',
                text: 'Iba pang halimbawa:',
                boldWords: ['Iba pang halimbawa:'],
              },
              {
                type: 'table_3',
                tableData: [
                  ['Salita', 'Tagalog', 'Baybayin'],
                  ['Goodbye', 'Paalam', 'Paalam'],
                  ['Everyone', 'Lahat', 'Lahat'],
                  ['Beautiful', 'Maganda', 'Maganda'],
                ],
              },
              {
                type: 'question_with_line',
                text: 'Kapag ang pangalan ba ay isinalin sa Filipino, magiiba kaya ang kanilang pagkakakilanlan?',
              },
              {
                type: 'text',
                text: 'Hindi, dahil isinalin lamang ang kanilang pangalan. Kaya hindi mag-iiba ang kanyang pagkakakilanlan.',
                boldWords: ['Hindi,'],
              },
              {
                type: 'text',
                text: 'Hindi ba minsan nga, sa eskwelahan, sa halip na Daniel ang pangalan, Dan-dan ang tawag sa kanila, hindi naman diba naiiba ang pagkakakilala sa kanya kasi siya pa din si Dan-dan?',
                boldWords: ['Hindi,'],
              },
              {
                type: 'text',
                text: 'Ngunit kung ang salin n\'ya naman ay hindi kaaya-aya at hindi maganda para itawag sa isang tao, maaari nating gamitin ang pangalawang panuntunan.',
              },
              {
                type: 'text',
                text: 'Dito na papasok ang pangalawang panuntunan ng Baybayin.',
              },
            ],
          },
        },
        {
          type: 'dropdown',
          dropdownSection: {
            title: 'Ikalawang Panuntunan',
            content: [
              {
                type: 'text',
                text: 'Ikalawang Panuntunan: "Kung Anong bigkas, Ay Siya Ring Baybay" o "Kung Anong Basa, Siya Ring Sulat".',
                boldWords: ['Ikalawang Panuntunan:'],
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_3',
                tableData: [
                  ['Sulat', 'Basa', 'Baybayin'],
                  ['Cherry', 'Tseri', 'Tseri'],
                  ['Jeffrey', 'Dyepri', 'Dyepri'],
                  ['Cindy', 'Sindi', 'Sindi'],
                  ['Christine', 'Kristin', 'Kristin'],
                ],
              },
              {
                type: 'text_2',
                text: 'Kaya ang "Apple" na nabanggit sa Unang Panuntunan ay magiging "Apol" na at kapag isalin sa Baybayin ay apol.',
                baybayinWords: { apol: 'apol' },
                boldWords: ['"Apple"', '"Apol"'],
              },
              {
                type: 'text',
                text: 'Iba pang halimbawa:',
                boldWords: ['Iba pang halimbawa:'],
              },
              {
                type: 'table_3',
                tableData: [
                  ['Sulat', 'Basa', 'Baybayin'],
                  ['Cake', 'Keyk', 'Keyk'],
                  ['Computer', 'Kompyuter', 'Kompyuter'],
                ],
              },
              {
                type: 'text',
                text: 'Laging tandaan ang "Translate before Transliterate" upang hindi malito.',
                boldWords: ['"Translate before Transliterate"'],
              },
              {
                type: 'text',
                text: 'Tignan muna ang salita kung ito ba ay nakabanyaga o hindi.',
                boldWords: [],
              },
              {
                type: 'text_with_line',
                text: 'Translation vs Transliteration',
              },
              {
                type: 'text',
                text: 'Ang translation ay ang pagsasalin ng isang wikang pasalita sa isa pang wikang pasalita o tinatawag na wika sa wika (language to language sa Ingles).',
                boldWords: ['translation'],
              },
              {
                type: 'table_2',
                tableData: [
                  ['Good Day (Ingles)', 'Magandang Araw (Filipino)'],
                  ['Annyeong (Korean)', 'Hello (Ingles)'],
                  ['Xiè xiè (Chinese)', 'Salamat (Tagalog)'],
                ],
              },
              {
                type: 'text',
                text: 'Ang transliteration naman ay ang pagsasalin ng isang wikang pasulat sa isa pang wikang pasulat o sulat sa sulat (script to script sa Ingles).',
                boldWords: ['transliteration'],
              },
              {
                type: 'table_1',
                tableData: [
                  ['Alpabeto', 'Baybayin'],
                  ['Mahal na mahal ni Ding si Narda.', 'Mahal na mahal ni Ding si Narda.'],
                  ['Nagkasundo ang magkapatid.', 'Nagkasundo ang magkapatid.'],
                ],
              },
            ],
          },
        },
        {
          type: 'dropdown',
          dropdownSection: {
            title: 'Ikatlong Panuntunan',
            content: [
              {
                type: 'text',
                text: 'Ikatlong Panuntunan: Ang Baybayin ay Silabaryo/Abugida at hindi Alpabeto.',
                boldWords: ['Ikatlong Panuntunan:'],
              },
              {
                type: 'text',
                text: 'Ito ang kadalasang pagkakamali ng mga baguhan, lalo na sa mga gusto gumamit ng Baybayin ngunit hindi alam kung paano ang tamang pagkasulat o paggamit.',
              },
              {
                type: 'question_with_line',
                text: 'Ano ang Silabaryo o tinatawag na Abugida?',
              },
              {
                type: 'text',
                text: 'Ang abugida ay binubuo ng magkasamang patinig at katinig.',
                boldWords: ['abugida'],
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_2',
                tableData: [
                  ['ASINTADO', 'A-Si-N-Ta-Do'],
                  ['A', 'Abugida'],
                  ['Si', 'Abugida'],
                  ['N', 'Hindi Abugida'],
                  ['Ta', 'Abugida'],
                  ['Do', 'Abugida'],
                ],
              },
              {
                type: 'question_with_line',
                text: 'Hindi ba ang abugida ay magkasamang patinig at katinig? Paano naging abugida ang patinig na wala naman itong kasamang patinig?',
              },
              {
                type: 'text',
                text: 'Ito ay sa kadahilanang ang patinig ay nakakatayo sa sarili nito.',
              },
              {
                type: 'text',
                text: 'Ang isang patinig ay isa na ring pantig kaya ang patinig ay isa na ring Abugida.',
              },
              {
                type: 'text',
                text: 'Kagaya ng salitang KAPAYAPAAN, ito ay binabaybay bilang:',
                boldWords: ['KAPAYAPAAN,'],
              },
              {
                type: 'table_4',
                tableData: [
                  ['Ka Pa Ya Pa A N', 'kapayapaan'],
                ],
              },
              {
                type: 'text',
                text: 'At hindi bilang:',
              },
              {
                type: 'table_5',
                tableData: [
                  ['K A P A Y A P A A N', 'kapayapaan'],
                ],
              },
              {
                type: 'question_with_line',
                text: 'Ano ba ang kaibahan ng Baybayin at alpabeto?',
              },
              {
                type: 'text',
                text: 'Ang Baybayin ay pantigan at ang alpabeto ay letra sa letra.',
                boldWords: ['Baybayin', 'alpabeto'],
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_1',
                tableData: [
                  ['Alpabeto (letra sa letra)', 'Baybayin (pantigan)'],
                  ['Pinapalaya', 'Pinapalay'],
                ],
              },
            ],
          },
        },
        {
          type: 'dropdown',
          dropdownSection: {
            title: 'Ika-apat Panuntunan',
            content: [
              {
                type: 'text',
                text: 'Ika-apat Panuntunan: Ang Daglat o Acronym sa salitang Ingles.',
                boldWords: ['Ika-apat Panuntunan:'],
              },
              {
                type: 'text',
                text:
                  'Kung anong sulat, iyon ang baybay. Dahil ang daglat ay pinaikli ' +
                  'na kaya marapat lamang na gamitan na ito ng virama.',
                boldWords: ['virama'],
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_5',
                tableData: [['PUP', 'PUP', 'TAMA']],
              },
              {
                type: 'table_4',
                tableData: [['PUP', 'piyupi', 'MALI']],
              },
              {
                type: 'table_5',
                tableData: [['DSWD', 'dswd', 'TAMA']],
              },
              {
                type: 'table_4',
                tableData: [['DSWD', 'disdobolyud', 'MALI']],
              },
              {
                type: 'text',
                text: 'Ginamitan ng kudlit ang MALING bersyon ng PUP.',
              },
              {
                type: 'text_2',
                text: 'Pi(yu)pi - Ang nasa loob ng parentheses ay ang tinatawag na kudlit.',
                baybayinWords: {
                  Pi: 'Pi',
                  yu: 'yu',
                  pi: 'pi',
                },
              },
              {
                type: 'text',
                text:
                  'Hindi na kailangan pang isalin ito sa kung anong Filipino bago ibaybay ' +
                  'dahil, ito ay pagdadaglat na o pagpapaikli na.',
                boldWords: ['kudlit', 'MALING', 'PUP'],
              },
              {
                type: 'question_with_line',
                text: 'Ano ang virama?',
                showLine: false,
              },
            ],
          },
        },
        {
          type: 'dropdown',
          dropdownSection: {
            title: 'Ikalimang Panuntunan',
            content: [
              {
                type: 'text',
                text: 'Ikalimang Panuntunan: Ang virama ay ang ginagamit bilang pamatay patinig sa isang abugida/karakter.',
                boldWords: ['Ikalimang Panuntunan:'],
              },
              {
                type: 'text',
                text: 'May tatlong uri ng virama na ginagamit ang Baybayin.',
                boldWords: ['tatlong uri ng virama'],
              },
              {
                type: 'table_2',
                tableData: [
                  ['Sabat(+)', 'Sinawali(x)', 'Pamudpod (᜴)'],
                ],
              },
              {
                type: 'question_with_line',
                text: 'Saan naman galing ang mga pamatay patinig o virama na ito?',
                showLine: false,
              },
              {
                type: 'text_with_line',
                text: 'Sabat(+)',
              },
              {
                type: 'text_2',
                text: 'Ang sabat(+) ay likha ni Ginoong Francisco Lopez. Nakakuha ito ng inspirasyon sa mga Tagbanua na gumagamit ng virama bilang pamatay patinig para lamang sa karakter na Ha(ha).',
                baybayinWords: {
                  // '(ha)': 'ha',
                },
              },
              {
                type: 'text_with_line',
                text: 'Sinawali(x)',
              },
              {
                type: 'text',
                text: 'Ang sinawali(x) ay base  pagbibirama ni Ginoong Norberto Romualdez daang taon na ang lumipas.',
              },
              {
                type: 'text',
                text: 'Ang paggamit ng simbolo na ">" at "<" bilang kudlit ng mga Tagbanua ang naging basihan ni Ginoong Romualdez. Pinagsama nya ito at naging "x" bilang pamatay-patinig o virama.',
              },
              {
                type: 'text',
                text: 'Ito ay in-adopt ng  Baybayin Buhayin Inc. (2010) bilang isang pamatay patinig. At binase nila ito sa unang paraan ng pagtatanggol ng mga Pilipino na magkahilis na dalawang stick o dalawang patalim/itak o sandata.',
              },
              {
                type: 'text_with_line',
                text: 'Pamudpod (᜴)',
              },
              {
                type: 'text',
                text: 'Ang pamudpod(᜴) naman ay mula sa isang Antropologong Dutch na si Anton Poostman (1950).',
              },
              {
                type: 'text',
                text: 'Dinala ito ni Poostman sa Pilipinas at ngayon ay ginagamit ng mga kapatid nating Mangyan sa kanilang Hanunuo script.',
                boldWords: ['pamudpod(᜴)', 'Anton Poostman(1950)'],
              },
              {
                type: 'exclamation_with_line',
                text: 'Mga dapat tandaan sa paggamit ng mga virama.',
              },
              {
                type: 'text',
                text: 'Kapag sabat(+) at sinawali(x), nilalagay ito sa ilalim ng karakter samantala kapag ito ay ang Pamudpod (᜴), ito ay sa gilid o sunod ng karakter.',
              },
              {
                type: 'question_with_line',
                text: 'Paano naman iniiba ang kasamang patinig ng isang karakter?',
              },
              {
                type: 'text',
                text: 'Ito ay ginagamitan ng kudlit.',
              },
              {
                type: 'text',
                text: 'Ang kudlit ay ang ginagamit bilang pamalit-patinig o vowel changer sa Ingles.',
              },
              {
                type: 'text',
                text: 'Sa kudlit ay tatlong bagay lamang ang dapat tandaan.',
              },
              {
                type: 'text_2',
                text: '1. Kapag ito ay walang kudlit, ang patinig ng karakter ay "A", halimbawa: BA(Ba).',
                baybayinWords: {
                  'BA': 'Ba',
                },
              },
              {
                type: 'text_2',
                text: '2. Kapag ito ay may kudlit sa itaas, ito ay may patinig na "E/I", halimbawa: BE(Be/Bi).',
                baybayinWords: {
                  'BE': 'Be',
                },
              },
              {
                type: 'text_2',
                text: '3. Kapag ang kudlit ay nasa ibaba, ang patinig ay "O/U", halimbawa: BO(Bo/Bu).',
                baybayinWords: {
                  'BO': 'Bo',
                },
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_4',
                tableData: [
                  ['Pintuan', 'pintuan'],
                ],
              },
              {
                type: 'text',
                text: 'Suriing mabuti ang maliit na tuldok sa taas at baba ng karakter, yan ang tinatawag na kudlit at virama.',
              },
            ],
          },
        },
        {
          type: 'dropdown',
          dropdownSection: {
            title: 'Ika-anim na Panuntunan',
            content: [
              {
                type: 'text',
                text: 'Ika-anim na Panuntunan: Pagbaybay ng "Ng" at "Mga".',
                boldWords: ['Ika-anim na Panuntunan:'],
              },
              {
                type: 'text_2',
                text: 'Ang "Ng" ay binabaybay bilang "Nang" (Nang) at hindi "Ng"(Ng)',
                baybayinWords: {
                  '(Nang)': '(Nang)',
                  '(Ng)': '(Ng)',
                },
                boldWords: ['"Ng"', '"Nang"'],
              },
              {
                type: 'text_2',
                text: 'Ang "Mga" naman ay binabaybay bilang "MaNga"(Manga) at hindi "MGa" (mga).',
                baybayinWords: {
                  '(Manga)': '(Manga)',
                  '(mga)': '(mga)',
                },
                boldWords: ['"Mga"', '"MaNga"', '"MGa"'],
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_4',
                tableData: [
                  [
                    'Umalis ng bahay ang mga bata.',
                    'Umalis (nang) bahay ang (manga) bata᜶',
                    'TAMA',
                  ],
                ],
              },
              {
                type: 'table_4',
                tableData: [
                  [
                    'Umalis ng bahay ang mga bata.',
                    'Umalis (ng) bahay ang (Mga) bata.',
                    'MALI',
                  ],
                ],
              },
            ],
          },
        },
        {
          type: 'dropdown',
          dropdownSection: {
            title: 'Ikapitong Panuntunan',
            content: [
              {
                type: 'text',
                text: 'Ikapitong Panuntunan: Ang mga bantas.',
                boldWords: ['Ikapitong Panuntunan:'],
              },
              {
                type: 'text',
                text: 'May dalawang bantas lamang na ginagamit ang Baybayin.',
              },
              {
                type: 'text_2',
                text: 'Ito ay ang Danda(,) at Kapid Danda(.).',
                baybayinWords: {
                  '(,)': '(,)',
                  '(.)': '(.)',
                },
                boldWords: ['Danda', 'Kapid', 'Danda'],
              },
              {
                type: 'text_with_line',
                text: 'Danda(/)',
              },
              {
                type: 'text_2',
                text:
                  'Ang danda(,) ay ginagamit bilang pamalit sa bantas na kuwit o comma(,) at ang kapid danda(.) naman ay ginagamit bilang pamalit sa bantas na tuldok o period(.), tandang pananong o question mark(?), at tandang padamdam o exclamation point(!).',
                baybayinWords: {
                  '(,)': '(,)',
                  '(.)': '(.)',
                },
                boldWords: ['danda', 'kuwit o comma(,)', 'kapid danda', 'tuldok o period(.)'],
              },
              {
                type: 'question_with_line',
                text: 'Paano naman malalaman kung ang pangungusap ay pasalaysay o nagtatanong?',
              },
              {
                type: 'text',
                text: 'Upang malaman na ito ay patanong, ginagamitan natin ito ng mga panandang salita.',
              },
              {
                type: 'question_with_line',
                text: 'Ano-ano ang mga panandang salita?',
              },
              {
                type: 'text',
                text: 'Ito ay ang paano, sino, ano, bakit, kailan, at saan.',
              },
              {
                type: 'question_with_line',
                text: 'Paano naman kung ito ay walang panandang salita na nabanggit?',
              },
              {
                type: 'text',
                text: 'Lalagyan lamang ito ng panandang "Ba" upang matukoy na ito ay nagtatanong.',
                boldWords: ['"Ba"'],
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_4',
                tableData: [
                  ['Kumain ka na. - Pautos (tuldok ang ginagamit)', 'Kumain ka na.'],
                  ['Kumain ka na ba? - Nagtatanong (tandang pananong ang ginagamit)', 'Kumain ka na ba?'],
                ],
              },
              {
                type: 'table_4',
                tableData: [
                  ['Pumunta ka. - Pasalaysay', 'Pumunta ka.'],
                  ['Pumunta ka ba? - Nagtatanong', 'Pumunta ka ba?'],
                ],
              },
              {
                type: 'question_with_line',
                text: 'Nasa huli at dulo lang ba nakikita ang mga pananda na ito ay nagtatanong?',
              },
              {
                type: 'text',
                text: 'Ito ay maari ring nasa gitna.',
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_4',
                tableData: [
                  ['Darating ba talaga siya?', 'Darating ba talaga siya.'],
                ],
              },
              {
                type: 'text_with_line',
                text: 'Gitling',
                boldWords: ['Gitling'],
              },
              {
                type: 'text',
                text:
                  'Walang katumbas na bantas ang gitling sa Baybayin. Bagkus, pagdikitin lamang ang dalawang salitang hinati ng gitling.',
                boldWords: ['pagdikitin'],
              },
              {
                type: 'text',
                text: 'Halimbawa:',
                boldWords: ['Halimbawa:'],
              },
              {
                type: 'table_4',
                tableData: [
                  ['Araw-araw', 'araw-araw', 'TAMA'],
                ],
              },
              {
                type: 'table_4',
                tableData: [
                  ['Araw-araw', 'arawaraw', 'MALI'],
                  ['Araw-araw', 'araw araw', 'MALI'],
                ],
              },
            ],
          },
        },                               
      ],
    };

    dispatch({ type: 'LESSON_LOADED', payload: lessonData });
  }, [dispatch, lessonTitle]);

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  return (
    <LessonContentTemplate
      lessonData={state.lessonData}
      onDropdownInteraction={(interactionId) => {
        console.log("Dropdown interaction:", interactionId);
      }}
    />
  );
};

export default PanutuntunanNgBaybayin;
