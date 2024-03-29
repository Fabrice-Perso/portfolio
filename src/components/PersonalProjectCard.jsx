import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// Importez vos images à partir du fichier externe (ajustez les chemins selon votre structure de fichiers)
import { viewLogin, viewList, viewAccount, viewCreate } from '/src/assets/images-projet-perso.js';

// Fonction pour obtenir le chemin complet par nomimage
const getImagePathByTitle = (nomimage) => {
  switch (nomimage) {
    case 'view-login.webp':
      return viewLogin;
    case 'view-list.webp':
      return viewList;
    case 'view-account.webp':
      return viewAccount;
    case 'view-create.webp':
      return viewCreate;
    default:
      return null;
  }
};

const PersonalProjectCard = ({ project,title, images, description, projectDetails }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    // Passez les informations du projet en tant que paramètres
    navigate('/personal-project', { state: { projectDetails } });
  };

  // Ajoutez le chemin complet aux noms des images en utilisant le champ "nomimage"
  const imagesWithFullPath = images.map((image) => ({
    ...image,
    chemin: getImagePathByTitle(image.nomimage), // Obtenez le chemin complet par nomimage
  }));

  // Créez un tableau d'objets avec les images à partir des importations
  const galleryImages = imagesWithFullPath.map((image, index) => ({
    original: image.chemin,
    description: image.titre,
    key: index,
  }));

  return (
    <>
    <h1>{title}</h1>
    <div className="personal-project-card">
      <h2 className="personal-project-title">{project}</h2>
      <Gallery items={galleryImages} />
      <div className="personal-project-content">
        <p className="personal-project-brief">{description}</p>
        <button className="project-view-button" onClick={redirectToDetails}>
          Explorer le Projet
        </button>
      </div>
    </div>
    </>
  );
};

// Déclaration des types des props
PersonalProjectCard.propTypes = {
  project: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string.isRequired,
      nomimage: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  projectDetails: PropTypes.object.isRequired, // Changez le type en object
};

export default PersonalProjectCard;
