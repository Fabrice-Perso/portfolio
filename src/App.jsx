import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ReactModal from "react-modal";
import Header from './components/Header';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Social from "./components/Social";


import Home from "./pages/Home";
import Contact from './pages/Contact';
import LegalMentions from "./pages/LegalMentions";
import MissingPage from "./pages/MissingPage";
import PersonalProject from "./pages/PersonalProject";
// Configuration de React Modal
ReactModal.setAppElement("#root");

function App() {

  // Définition du basename pour le routage en fonction de l'environnement
  const basename = import.meta.env.MODE === "production" ? "/portfoliotest/" : "";

  return (
    <>
    <BrowserRouter basename={basename}>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personnel/ProjetPerso" element={<Navigate to="/ProjetPerso" replace />} />
            <Route path="/personal-project" element={<PersonalProject />} />
            {/* <Route path="/ProjetPerso" element={<ProjetPerso />} />            
            <Route path="/entreprise/ProjetEntreprise" element={<Navigate to="/ProjetEntreprise" replace />} />
            <Route path="/ProjetEntreprise" element={<ProjetEntreprise />} /> */}
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="/error404" element={<MissingPage />} />
            
            {/* Redirection vers `/error404` pour tout autre chemin non reconnu */}
            {/* <Route path="*" element={<Navigate to="/error404" replace />} /> */}
          </Route>
        </Routes>
        <ScrollToTop />
        <Social />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;