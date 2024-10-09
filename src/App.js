// App.js
import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BaybayinGuide from './pages/baybayinTools/baybayinGuide/BaybayinGuide';
import LessonList from './pages/baybayinTools/baybayinGuide/LessonList';
import BaybayinPhrasebook from './pages/baybayinTools/baybayinPhrasebook/BaybayinPhrasebook';
import PhraseList from './pages/baybayinTools/baybayinPhrasebook/PhraseList';
import BaybayinCharacters from './pages/baybayinTools/baybayinCharacters/BaybayinCharacters';
import { LessonProvider } from './pages/baybayinTools/baybayinGuide/Lessons/LessonContext';
import Footer from './components/Footer';

// Additional lesson imports
import AnoNgaBaAngBaybayin from './pages/baybayinTools/baybayinGuide/Lessons/Category1/AnoNgaBaAngBaybayin';
import AnoNgaBaAngAbugida from './pages/baybayinTools/baybayinGuide/Lessons/Category1/AnoNgaBaAngAbugida';
import PanutuntunanNgBaybayin from './pages/baybayinTools/baybayinGuide/Lessons/Category1/PanutuntunanNgBaybayin';
import UnangBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/UnangBakas';
import IkalawangBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/IkalawangBakas';
import IkatlongBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/IkatlongBakas';
import IkaApatNaBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/IkaApatNaBakas';
import IkalimangBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/IkalimangBakas';
import IkaAnimNaBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/IkaAnimNaBakas';
import IkapitongBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/IkapitongBakas';
import IkawalongBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/IkawalongBakas';
import IkasyamNaBakas from './pages/baybayinTools/baybayinGuide/Lessons/Category2/IkasyamNaBakas';
import HomoSapiens from './pages/baybayinTools/baybayinGuide/Lessons/Category3/HomeSapiens';
import Kabibe from './pages/baybayinTools/baybayinGuide/Lessons/Category3/Kabibe';
import Taklobo from './pages/baybayinTools/baybayinGuide/Lessons/Category3/Taklobo';
import PrecolonialPhilippines from './pages/baybayinTools/baybayinGuide/Lessons/Category3/PrecolonialPhilippines';

import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/baybayin-tools/baybayin-guide" element={<BaybayinGuide />} />
            <Route path="/baybayin-tools/baybayin-phrasebook" element={<BaybayinPhrasebook />} />
            <Route path="/baybayin-tools/baybayin-phrasebook/:category" element={<PhraseList />} />
            <Route path="/baybayin-tools/baybayin-characters" element={<BaybayinCharacters />} />

            {/* Lesson routes within LessonProvider */}
            <Route
              path="/baybayin-tools/baybayin-guide/:category"
              element={
                <LessonProvider>
                  <LessonList />
                </LessonProvider>
              }
            />
            <Route
              path="/baybayin-tools/baybayin-guide/1/ano-nga-ba-ang-baybayin"
              element={
                <LessonProvider>
                  <AnoNgaBaAngBaybayin />
                </LessonProvider>
              }
            />
            <Route
              path="/baybayin-tools/baybayin-guide/1/ano-nga-ba-ang-abugida"
              element={
                <LessonProvider>
                  <AnoNgaBaAngAbugida />
                </LessonProvider>
              }
            />
            <Route
              path="/baybayin-tools/baybayin-guide/1/panutuntunan-ng-baybayin"
              element={
                <LessonProvider>
                  <PanutuntunanNgBaybayin />
                </LessonProvider>
              }
            />
            {/* Additional lesson routes */}
            <Route path="/baybayin-tools/baybayin-guide/2/unang-bakas" element={<LessonProvider><UnangBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/2/ikalawang-bakas" element={<LessonProvider><IkalawangBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/2/ikatlong-bakas" element={<LessonProvider><IkatlongBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/2/ika-apat-na-bakas" element={<LessonProvider><IkaApatNaBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/2/ikalimang-bakas" element={<LessonProvider><IkalimangBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/2/ika-anim-na-bakas" element={<LessonProvider><IkaAnimNaBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/2/ikapitong-bakas" element={<LessonProvider><IkapitongBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/2/ikawalong-bakas" element={<LessonProvider><IkawalongBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/2/ikasyam-na-bakas" element={<LessonProvider><IkasyamNaBakas /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/3/homo-sapiens" element={<LessonProvider><HomoSapiens /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/3/kabibe" element={<LessonProvider><Kabibe /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/3/taklobo" element={<LessonProvider><Taklobo /></LessonProvider>} />
            <Route path="/baybayin-tools/baybayin-guide/3/precolonial-philippines" element={<LessonProvider><PrecolonialPhilippines /></LessonProvider>} />
          
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
