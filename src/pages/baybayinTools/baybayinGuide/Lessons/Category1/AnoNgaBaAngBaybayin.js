import React, { useContext, useEffect } from 'react';
import LessonContext from '../LessonContext';
import LessonContentTemplate from '../LessonContentTemplate';

const AnoNgaBaAngBaybayin = () => {
  const { state, dispatch } = useContext(LessonContext);

  useEffect(() => {
    dispatch({ type: 'LOAD_LESSON' });

    const lessonData = {
      title: 'Ano Nga Ba Ang Baybayin?',
      contentBlocks: [
        { type: 'text_with_line', 
          text: 'Baybayin',
          boldWords: ['Baybayin'],
        },
        { type: 'text', text: 'Ang Baybayin ay sinaunang paraan ng pagsulat ng ating mga ninuno.', boldWords: ['Baybayin'] },
        { type: 'text', text: 'Nagmula ito sa salitang Baibai o Baybay na nangangahulugan sa salitang Ingles na "To Read", "To Recite or Repeat After Me".', boldWords: ['Baibai', 'Baybay', '"To Read"', '"To Recite or Repeat After Me"'] },
        { type: 'text', text: 'Tatlong (3) patinig', boldWords: ['Tatlong', '(3)', 'patinig'] },
        {
          type: 'table_1',
          tableData: [
            ['Latin Script', 'Baybayin'],
            ['A', 'a'],
            ['E/I', 'e'],
            ['O/U', 'o'],
          ]
        },
        // Only include "(14)" once in the boldWords array
        { type: 'text', text: 'At labing-apat (14) na Katinig.', boldWords: ['At labing-apat', '(14)', 'na Katinig.'] },
        {
          type: 'table_1',
          tableData: [
            ['Latin Script', 'Baybayin'],
            ['Ba', 'Ba'],
            ['Ka', 'Ka'],
            ['Da/Ra', 'Da'],
            ['Ga', 'Ga'],
            ['Ha', 'Ha'],
            ['La', 'La'],
            ['Ma', 'Ma'],
            ['Na', 'Na'],
            ['Nga', 'Nga'],
            ['Pa', 'Pa'],
            ['Sa', 'Sa'],
            ['Ta', 'Ta'],
            ['Wa', 'Wa'],
            ['Ya', 'Ya'],
          ]
        },
        { type: 'text', text: 'May nagsasabing Alibata daw ang tawag dito at hindi Baybayin.' }
      ],
    };

    dispatch({ type: 'LESSON_LOADED', payload: lessonData });
  }, [dispatch]);

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  return <LessonContentTemplate lessonData={state.lessonData} />;
};

export default AnoNgaBaAngBaybayin;
