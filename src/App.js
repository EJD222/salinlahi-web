import React, { useEffect, useState, useMemo } from "react"
import "./App.css"
import NavigationBar from "./components/NavigationBar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom"
import Home from "./pages/home/Home"
import BaybayinGuide from "./pages/baybayinTools/baybayinGuide/BaybayinGuide"
import LessonList from "./pages/baybayinTools/baybayinGuide/LessonList"
import BaybayinPhrasebook from "./pages/baybayinTools/baybayinPhrasebook/BaybayinPhrasebook"
import PhraseList from "./pages/baybayinTools/baybayinPhrasebook/PhraseList"
import BaybayinCharacters from "./pages/baybayinTools/baybayinCharacters/BaybayinCharacters"
import BaybayinTransliterator from "./pages/baybayinTools/baybayinTransliterator/YOLOv8Detection"
import { LessonProvider } from "./pages/baybayinTools/baybayinGuide/Lessons/LessonContext"
import Footer from "./components/Footer"

import AnoNgaBaAngBaybayin from "./pages/baybayinTools/baybayinGuide/Lessons/Category1/AnoNgaBaAngBaybayin"
import AnoNgaBaAngAlibata from "./pages/baybayinTools/baybayinGuide/Lessons/Category1/AnoNgaBaAngAlibata"
import PanutuntunanNgBaybayin from "./pages/baybayinTools/baybayinGuide/Lessons/Category1/PanutuntunanNgBaybayin"
import UnangBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/UnangBakas"
import IkalawangBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/IkalawangBakas"
import IkatlongBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/IkatlongBakas"
import IkaApatNaBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/IkaApatNaBakas"
import IkalimangBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/IkalimangBakas"
import IkaAnimNaBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/IkaAnimNaBakas"
import IkapitongBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/IkapitongBakas"
import IkawalongBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/IkawalongBakas"
import IkasyamNaBakas from "./pages/baybayinTools/baybayinGuide/Lessons/Category2/IkasyamNaBakas"
import HomoSapiens from "./pages/baybayinTools/baybayinGuide/Lessons/Category3/HomeSapiens"
import Kabibe from "./pages/baybayinTools/baybayinGuide/Lessons/Category3/Kabibe"
import Taklobo from "./pages/baybayinTools/baybayinGuide/Lessons/Category3/Taklobo"
import PrecolonialPhilippines from "./pages/baybayinTools/baybayinGuide/Lessons/Category3/PrecolonialPhilippines"

import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </Router>
    </div>
  )
}

const validCategories = ["1", "2", "3"]

function AppRoutes() {
  const [lastValidPath, setLastValidPath] = useState("/")
  const location = useLocation()
  const navigate = useNavigate()

  const validPaths = useMemo(
    () => [
      "/",
      "/baybayin-tools/baybayin-guide",
      "/baybayin-tools/baybayin-phrasebook",
      "/baybayin-tools/baybayin-phrasebook/:category",
      "/baybayin-tools/baybayin-characters",
      "/baybayin-tools/baybayin-transliterator",
      "/baybayin-tools/baybayin-guide/1/ano-nga-ba-ang-baybayin",
      "/baybayin-tools/baybayin-guide/1/ano-nga-ba-ang-alibata",
      "/baybayin-tools/baybayin-guide/1/panutuntunan-ng-baybayin",
      "/baybayin-tools/baybayin-guide/2/unang-bakas",
      "/baybayin-tools/baybayin-guide/2/ikalawang-bakas",
      "/baybayin-tools/baybayin-guide/2/ikatlong-bakas",
      "/baybayin-tools/baybayin-guide/2/ika-apat-na-bakas",
      "/baybayin-tools/baybayin-guide/2/ikalimang-bakas",
      "/baybayin-tools/baybayin-guide/2/ika-anim-na-bakas",
      "/baybayin-tools/baybayin-guide/2/ikapitong-bakas",
      "/baybayin-tools/baybayin-guide/2/ikawalong-bakas",
      "/baybayin-tools/baybayin-guide/2/ikasyam-na-bakas",
      "/baybayin-tools/baybayin-guide/3/homo-sapiens",
      "/baybayin-tools/baybayin-guide/3/kabibe",
      "/baybayin-tools/baybayin-guide/3/taklobo",
      "/baybayin-tools/baybayin-guide/3/precolonial-philippines",
      "/contact",
      "/about",
    ],
    [],
  )

  useEffect(() => {
    if (validPaths.some((path) => location.pathname.startsWith(path))) {
      setLastValidPath(location.pathname)
    } else {
      navigate("/404-not-found", { replace: true })
    }
  }, [location.pathname, navigate, lastValidPath, validPaths])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/baybayin-tools/baybayin-guide"
        element={<BaybayinGuide />}
      />
      <Route
        path="/baybayin-tools/baybayin-phrasebook"
        element={<BaybayinPhrasebook />}
      />
      <Route
        path="/baybayin-tools/baybayin-phrasebook/:category"
        element={<PhraseList />}
      />
      <Route
        path="/baybayin-tools/baybayin-characters"
        element={<BaybayinCharacters />}
      />
      <Route
        path="/baybayin-tools/baybayin-transliterator"
        element={<BaybayinTransliterator />}
      />

      <Route
        path="/baybayin-tools/baybayin-guide/:category"
        element={
          <ValidateCategory>
            <LessonProvider>
              <LessonList />
            </LessonProvider>
          </ValidateCategory>
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
        path="/baybayin-tools/baybayin-guide/1/ano-nga-ba-ang-alibata"
        element={
          <LessonProvider>
            <AnoNgaBaAngAlibata />
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
      <Route
        path="/baybayin-tools/baybayin-guide/2/unang-bakas"
        element={
          <LessonProvider>
            <UnangBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/2/ikalawang-bakas"
        element={
          <LessonProvider>
            <IkalawangBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/2/ikatlong-bakas"
        element={
          <LessonProvider>
            <IkatlongBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/2/ika-apat-na-bakas"
        element={
          <LessonProvider>
            <IkaApatNaBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/2/ikalimang-bakas"
        element={
          <LessonProvider>
            <IkalimangBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/2/ika-anim-na-bakas"
        element={
          <LessonProvider>
            <IkaAnimNaBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/2/ikapitong-bakas"
        element={
          <LessonProvider>
            <IkapitongBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/2/ikawalong-bakas"
        element={
          <LessonProvider>
            <IkawalongBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/2/ikasyam-na-bakas"
        element={
          <LessonProvider>
            <IkasyamNaBakas />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/3/homo-sapiens"
        element={
          <LessonProvider>
            <HomoSapiens />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/3/kabibe"
        element={
          <LessonProvider>
            <Kabibe />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/3/taklobo"
        element={
          <LessonProvider>
            <Taklobo />
          </LessonProvider>
        }
      />
      <Route
        path="/baybayin-tools/baybayin-guide/3/precolonial-philippines"
        element={
          <LessonProvider>
            <PrecolonialPhilippines />
          </LessonProvider>
        }
      />

      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

      <Route path="/404-not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function ValidateCategory({ children }) {
  const { category } = useParams()

  if (!validCategories.includes(category)) {
    return <Navigate to="/404-not-found" replace />
  }

  return children
}

export default App