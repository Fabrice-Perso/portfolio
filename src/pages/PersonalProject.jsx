import { useLocation } from 'react-router-dom';
import PersonalProjectTimeline from '../components/PersonalProjectTimeline';
import PropTypes from 'prop-types';

const PersonalProject = () => {
  const location = useLocation();
  const projectDetails = location.state?.projectDetails;

  return (
    <div className="projecttimeline">
      {/* Vérifiez si projectDetails est défini avant de transmettre les données */}
      {projectDetails && (
        <PersonalProjectTimeline projectDetails={projectDetails} />
      )}
    </div>
  );
};

// Déclaration des types des props pour PersonalProjectTimeline, si nécessaire
PersonalProjectTimeline.propTypes = {
  projectDetails: PropTypes.arrayOf(
    PropTypes.shape({
      version: PropTypes.string.isRequired,
      annee: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default PersonalProject;
