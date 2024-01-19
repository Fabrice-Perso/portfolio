import About from '../components/About';
import Skills from '../components/Skills';
import ProjectList  from '../components/ProjectList';
// Importez vos données de projets personnels
import formationProjects from '../data/formationProjects';
import personalProjects from '../data/personalProjects';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SkillsProvider } from '../context/SkillsContext';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <SkillsProvider>
    <main>
      <section className="About" id="about">
        <About />
        </section> 
        <section className="Skills" id="skills">
        <Skills />
        </section>
        <section className="project-list-container" id="projectsformation">
        <ProjectList projects={formationProjects} title="Mes Projets de Formation"/>
        </section>
        <section className="project-list-container" id="projectsperso">
        <ProjectList projects={personalProjects} title="Mes Projets Personnels" />
        </section>
    </main>
    </SkillsProvider>
  );
}

export default Home;