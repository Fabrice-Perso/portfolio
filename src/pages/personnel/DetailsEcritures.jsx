import { FiFileText,FiList,FiCalendar } from 'react-icons/fi'; // Exemple d'icône, à remplacer par celle que vous souhaitez utiliser

const DetailsEcritures = () => {
  return (
    <div className="details-ecritures">
      <h2 className="section-title">Détails des Ecritures :</h2>
      <div className="features-container"> {/* Utilisation de la même classe pour un style cohérent */}
        <div className="feature-card"> {/* Utilisation de la même classe pour les cartes */}
          <FiFileText className="icon" />
          <div className="feature-text">
            <h3>Type de saisie</h3>
            <p>Revenus ou Dépenses.</p>
          </div>
        </div>
        <div className="feature-card">
          <FiFileText className="icon" />
          <div className="feature-text">
            <h3>Catégories</h3>
            <p>Groupe, Catégorie (rattachée à un Compte), Sous-Catégorie, Détail.</p>
          </div>
        </div>
        <div className="feature-card">
          <FiCalendar className="icon" />
          <div className="feature-text">
            <h3>Écritures récurrentes</h3>
            <p>Possibilité de définir des écritures récurrentes et des prélèvements automatiques.</p>
          </div>
        </div>
        <div className="feature-card">
          <FiFileText className="icon" />
          <div className="feature-text">
            <h3>Transferts automatiques</h3>
            <p>{"Création d'écritures automatiques entre 2 comptes existants dans le logiciel (même utilisateur ou différent)."}</p>
          </div>
        </div>
        <div className="feature-card">
          <FiList className="icon" />
          <div className="feature-text">
            <h3>Statut du Partage</h3>
            <p>Tableau de suivi et éléments de type Commandes</p>
          </div>
        </div>
        <div className="feature-card">
          <FiList className="icon" />
          <div className="feature-text">
            <h3>Statut du Rapprochement Bancaire</h3>
            <p>Tableau de suivi et éléments de type Commandes</p>
          </div>
        </div>
        <div className="feature-card">
          <FiList className="icon" />
          <div className="feature-text">
            <h3>Suivi des dépenses liés à la Santé</h3>
            <p>Tableau de suivi et éléments de type Santé pour vérifier les remboursements.</p>
          </div>
        </div>
        <div className="feature-card">
          <FiList className="icon" />
          <div className="feature-text">
            <h3>Suivi des Provisions</h3>
            <p>Tableau de suivi et éléments de type Provisions</p>
          </div>
        </div>
        <div className="feature-card">
          <FiList className="icon" />
          <div className="feature-text">
            <h3>Suivi des Commandes</h3>
            <p>Tableau de suivi et éléments de type Commandes</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsEcritures;
