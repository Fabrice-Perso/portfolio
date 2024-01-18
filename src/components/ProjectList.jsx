// ProjectList.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectList = ({ projects, title }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
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
          <ProjectCard key={project.id} project={project} onOpenModal={openModal} />
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
