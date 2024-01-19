// Skills.js
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoRedux, LogoMySql, LogoPHP, LogoApi, LogoNode, LogoPhpmyadmin } from "../assets/images";
import useScrollToHash from "../hooks/useScrollToHash";

const Skills = () => {
  // Appel du hook avec la hauteur de l'en-tête si nécessaire.
  useScrollToHash(100); // 100px est un exemple, remplacez par la hauteur de votre en-tête fixe
  
  return (
    <>
      <h2 className="section-title" id="skills">Mes Compétences</h2> {/* Assurez-vous d'ajouter l'ID correspondant ici */}
      <div className="skill-container">
        {[LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoRedux, LogoMySql, LogoPHP, LogoApi, LogoNode, LogoPhpmyadmin].map((logo, index) => (
          <div className="skill-card" key={index}>
            <img src={logo} alt={`Skill ${index + 1}`} className="skill-logo" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
