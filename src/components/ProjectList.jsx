// ProjectList.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi, LogoNode, LogoRedux, ProjetF2, ProjetF3, ProjetF4, ProjetF5, ProjetF6, ProjetF8,ProjetF9, ProjetF11 } from "../assets/images";

const ProjectList = ({ projects, title }) => {
  const getProjectImage = (id) => {
    switch (id) {
      case 2: return ProjetF2;
      case 3: return ProjetF3;
      case 4: return ProjetF4;
      case 5: return ProjetF5;
      case 6: return ProjetF6;
      case 8: return ProjetF8;
      case 9: return ProjetF9;
      case 11: return ProjetF11;
      default: return null;
    }
  };
  const getLanguageLogo = (languageName) => {
    switch (languageName) {
      case 'HTML': return LogoHTML;
      case 'CSS': return LogoCss;
      case 'SASS': return LogoSass;
      case 'JS': return LogoJS;
      case 'REACT': return LogoReact;
      case 'VITE.JS': return LogoVite;
      case 'API': return LogoApi;
      case 'NODE': return LogoNode;
      case 'Redux': return LogoRedux;
      // Ajoutez plus de cas si nécessaire
      default: return null;
    }
  };
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject({
      ...project,
      img: getProjectImage(project.id), // Assurez-vous d'ajouter cette ligne
      imgcard: getProjectImage(project.id),
      languages: project.languages.map(lang => ({
        ...lang,
        logo: getLanguageLogo(lang.name)
      }))
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
<>
      <h1>{title}</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              ...project,
              imgcard: getProjectImage(project.id),
              languages: project.languages.map(lang => ({
                ...lang,
                logo: getLanguageLogo(lang.name)
              }))
            }}
            onOpenModal={openModal}
          />
        ))}
      </div>
      {isModalOpen && <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />}
    </>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgcard: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brief: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectList;
