// Skills.js
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoRedux, LogoMySql, LogoPHP, LogoApi, LogoNode, LogoPhpmyadmin } from "../assets/images";

const Skills = () => (
  <>
  <h2 className="section-title">Mes Compétences</h2>
  <div className="skill-container">
    {[LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoRedux, LogoMySql, LogoPHP, LogoApi, LogoNode, LogoPhpmyadmin].map((logo, index) => (
      <div className="skill-card" key={index}>
        <img src={logo} alt={`Skill ${index + 1}`} className="skill-logo" />
      </div>
    ))}
  </div>
  </>
);

export default Skills;
