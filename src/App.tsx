import { Routes, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Home from "./pages/Home/Home"
import Apropos from "./pages/Apropos"
import Inscription from "./pages/Inscription"
import Connexion from "./pages/Connexion"
import Contacts from "./pages/Contacts"
import Bien from "./pages/Bien"
import BienDetail from "./pages/BienDetail"


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} /> 
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/bien" element={<Bien />} />
        <Route path="/bien/:id" element={<BienDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
