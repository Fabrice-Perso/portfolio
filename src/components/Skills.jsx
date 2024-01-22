// Skills.js
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoRedux, LogoMySql, LogoPHP, LogoApi, LogoNode, LogoPhpmyadmin } from "../assets/images";
import useScrollToHash from "../hooks/useScrollToHash";
import { useSkills } from '../hooks/useSkills';
import { useState } from 'react';

const Skills = () => {
  const { setActiveSkill } = useSkills();
  const [selectedSkill, setSelectedSkill] = useState(null);
  // Appel du hook avec la hauteur de l'en-tête si nécessaire.
  useScrollToHash(100); // 100px est un exemple, remplacez par la hauteur de votre en-tête fixe
  
    
    const skills = [
      { name: 'HTML', logo: LogoHTML },
      { name: 'CSS', logo: LogoCss },
      { name: 'SASS', logo: LogoSass },
      { name: 'JS', logo: LogoJS },
      { name: 'REACT', logo: LogoReact },
      { name: 'VITE.JS', logo: LogoVite },
      { name: 'API', logo: LogoApi },
      { name: 'NODE', logo: LogoNode },
      { name: 'REDUX', logo: LogoRedux },
      { name: 'MySql', logo: LogoMySql },
      { name: 'PHP', logo: LogoPHP },
      { name: 'Phpmyadmin', logo: LogoPhpmyadmin },
    ];

    const handleSkillClick = (skillName) => {
      setActiveSkill(skillName);
      setSelectedSkill(skillName); // Mettez à jour l'état avec la compétence sélectionnée
    };

    return (
      <>
        <h2 className="section-title" id="skills">Mes Compétences</h2>
        <div className="skill-container">
          {skills.map((skill, index) => (
            <div
              className={`skill-card ${selectedSkill === skill.name ? 'selected' : ''}`}
              key={index}
              onClick={() => handleSkillClick(skill.name)}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              {selectedSkill === skill.name && <div className="skill-overlay"></div>}
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Skills;
