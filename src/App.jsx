import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header';
import Contact from './components/Contact';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LegalMentions from "./components/LegalMentions";
import Social from "./components/Social";
import MissingPage from "./components/MissingPage";

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personnel/ProjetPerso" element={<Navigate to="/ProjetPerso" replace />} />
            {/* <Route path="/ProjetPerso" element={<ProjetPerso />} />            
            <Route path="/entreprise/ProjetEntreprise" element={<Navigate to="/ProjetEntreprise" replace />} />
            <Route path="/ProjetEntreprise" element={<ProjetEntreprise />} /> */}
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="/error404" element={<MissingPage />} />
            {/* Redirection vers `/error404` pour tout autre chemin non reconnu */}
            <Route path="*" element={<Navigate to="/error404" replace />} />
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