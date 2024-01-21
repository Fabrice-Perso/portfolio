import About from './home/About';
import Skills from './home/Skills';
import ProjectList  from './home/formation/ProjectList';
import formationProjects from '../data/formationProjects';
import personalProjects from '../data/personalProjects';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SkillsProvider } from '../context/SkillsContext';
import PersonalProjectCard from './home/PersonalProjectCard';

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
        <PersonalProjectCard 
         title="Mon Projet Personnel"
         project={personalProjects.name} 
         images={personalProjects.images} 
         description={personalProjects.description}
       />
      </section>
    </main>
    </SkillsProvider>
  );
}

export default Home;