// ProjectList.jsx
import PropTypes  from 'prop-types';
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi, LogoNode, LogoRedux, LogoMySql, LogoPHP, LogoPhpmyadmin } from "../assets/images";

const images = {
    HTML: LogoHTML,
    CSS: LogoCss,
    SASS: LogoSass,
    JS: LogoJS,
    REACT: LogoReact,
    VITE: LogoVite,
    API: LogoApi,
    NODE: LogoNode,
    REDUX: LogoRedux,
    MYSQL: LogoMySql,
    PHP: LogoPHP,
    PHPMYADMIN: LogoPhpmyadmin,
};

const ProjetPerso = ({ projects, title }) => {
    return (
      <div className="Container">
        <section className="Projet-Perso">
          <h1>{title}</h1>
          <p>{projects.origine}</p>
          <div>
            <h2>Chronologie :</h2>
            <ol className="chronology">
              {projects.chronologie.map((item, index) => (
                <li key={index}>
                  <span className="version">{item.version} :</span>
                  <span className="annee">{item.annee} :</span>
                  <span className="description">{item.description}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="technologies-used">Technologie(s) utilisée(s) :</h2>
            <div className="project-languages">
              {projects.technologies.map((tech, index) => (
                <img src={images[tech]} alt={`Logo ${tech}`} key={index} />
              ))}
            </div>
          </div>
          <div>
            <h2>Fonctionnalités principales :</h2>
            <ul className="features">
              {projects.fonctionnalites.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Détails des écritures :</h2>
            <ul className="writing-details">
              {projects.detailsEcritures.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <p>{projects.demonstration}</p>
          <a className="bouton-projet" href={projects.lienProjet} target="_blank" rel="noreferrer">
            Voir le projet
          </a>
        </section>

      </div>
    );
  };
  
  ProjetPerso.propTypes = {
      projects: PropTypes.shape({
          titre: PropTypes.string.isRequired,
          origine: PropTypes.string.isRequired,
          chronologie: PropTypes.arrayOf(
              PropTypes.shape({
                  version: PropTypes.string.isRequired,
                  description: PropTypes.string.isRequired
              })
          ).isRequired,
          technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
          fonctionnalites: PropTypes.arrayOf(PropTypes.string).isRequired,
          detailsEcritures: PropTypes.arrayOf(PropTypes.string).isRequired,
          demonstration: PropTypes.string.isRequired,
          lienProjet: PropTypes.string.isRequired
      }).isRequired,
      title: PropTypes.string.isRequired
  };
  
  export default ProjetPerso;