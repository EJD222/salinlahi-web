import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BaybayinGuide from './pages/baybayinTools/baybayinGuide/BaybayinGuide';
import LessonList from './pages/baybayinTools/baybayinGuide/LessonList'; // Import LessonList
import BaybayinPhrasebook from './pages/baybayinTools/baybayinPhrasebook/BaybayinPhrasebook';
import PhraseList from './pages/baybayinTools/baybayinPhrasebook/PhraseList';
import BaybayinCharacters from './pages/baybayinTools/baybayinCharacters/BaybayinCharacters';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baybayin-tools/baybayin-guide" element={<BaybayinGuide />} />
          <Route path="/baybayin-tools/baybayin-guide/:category" element={<LessonList />} />
          <Route path="/baybayin-tools/baybayin-phrasebook" element={<BaybayinPhrasebook />} />
          <Route path="/baybayin-tools/baybayin-phrasebook/:category" element={<PhraseList />} />
          <Route path="/baybayin-tools/baybayin-characters" element={<BaybayinCharacters />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
