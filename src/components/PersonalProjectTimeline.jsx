import { Chrono } from "react-chrono";
import PropTypes from 'prop-types';
import '../sass/components/PersonalProjectTimeline.css'; // Assurez-vous de créer ce fichier CSS

function PersonalProjectTimeline({ projectDetails }) {

  if (!projectDetails || projectDetails.length === 0) {
    return <div>Pas de détails de projet disponibles pour le moment.</div>;
  }

  // Trier les projectDetails par année en ordre décroissant
  const sortedProjectDetails = [...projectDetails].sort((a, b) => a.annee.localeCompare(b.annee));

  const items = sortedProjectDetails.map(item => ({
    title: item.annee,
    cardTitle: item.version,
    cardSubtitle: `Lancement en ${item.annee}`,
    cardDetailedText: item.description
  }));

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <h2 className="section-title" id="timeline">Chronologie</h2>
      <Chrono 
        items={items} 
        mode="VERTICAL_ALTERNATING" 
        
      />
    </div>
  );
}

PersonalProjectTimeline.propTypes = {
  projectDetails: PropTypes.arrayOf(
    PropTypes.shape({
      version: PropTypes.string.isRequired,
      annee: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default PersonalProjectTimeline;
