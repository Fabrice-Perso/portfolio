import About from '../components/About';
import Skills from '../components/Skills';
import ProjectList  from '../components/ProjectList';
// Importez vos données de projets personnels
import formationProjects from '../data/formationProjects';
import personalProjects from '../data/personalProjects';

function Home() {
  return (
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
  );
}

export default Home;