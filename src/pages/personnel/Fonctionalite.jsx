import { CiBank, CiShare2 } from 'react-icons/ci';
import { TbLockShare } from 'react-icons/tb';
import { FiBookOpen } from 'react-icons/fi';
import { GrValidate } from 'react-icons/gr';
import { FaLock } from 'react-icons/fa6';

const Fonctionalite = () => {
  return (
    <div className="fonctionalite">
      <h2 className="section-title">Fonctionnalités Principales :</h2>
      <div className="features-container">
        <div className="feature-card">
          <CiBank className="icon" />
          <div className="feature-text">
            <h3>Gestion de comptes bancaires personnels</h3>
            <p>{"Jusqu'à 5 comptes de types : Courant - Différé - Joint et 5 comptes Épargne."}</p>
          </div>
        </div>
        <div className="feature-card">
          <TbLockShare className="icon" />
          <div className="feature-text">
            <h3>Compte Joint</h3>
            <p>Utilisable par les utilisateurs définis, tandis que les autres comptes sont individuels.</p>
          </div>
        </div>
        <div className="feature-card">
          <FiBookOpen className="icon" />
          <div className="feature-text">
            <h3>{"Saisies d'écritures comptables"}</h3>
            <p>De Revenus ou de Dépenses.</p>
          </div>
        </div>
        <div className="feature-card">
          <FiBookOpen className="icon" />
          <div className="feature-text">
            <h3>{"Pointage des écritures comptables"}</h3>
            <p>Possibilité de pointer les écritures pour réaliser son rapprochement bancaire.</p>
          </div>
        </div>
        <div className="feature-card">
          <CiShare2 className="icon" />
          <div className="feature-text">
            <h3>Partage des écritures</h3>
            <p>Entre 2 utilisateurs.</p>
          </div>
        </div>
        <div className="feature-card">
          <FaLock className="icon" />
          <div className="feature-text">
            <h3>Validation des écritures</h3>
            <p>{"Sur une période après rapprochement bancaire et réalisation de clôtures d'exercices."}</p>
          </div>
        </div>
        <div className="feature-card">
          <GrValidate className="icon" />
          <div className="feature-text">
            <h3>{"Clôture de l'Exercice Comptable"}</h3>
            <p>{"Sur une période après rapprochement bancaire et réalisation de clôtures d'exercices."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fonctionalite;
