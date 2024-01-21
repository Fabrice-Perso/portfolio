const DetailsEcritures = () => {
    return (
      <div className="details-ecritures">
        <h2 className="section-title">Détails des écritures :</h2>
        <div className="card">
          <ul className="writing-details">
            <li>Type de saisie : Revenus ou Dépenses.</li>
            <li>Groupe, Catégorie (rattachée à un Compte), Sous-Catégorie, Détail.</li>
            <li>Possibilité de définir des écritures récurrentes et des prélèvements automatiques.</li>
            <li>Création d'écritures automatiques entre 2 comptes existants dans le logiciel (même utilisateur ou différent).</li>
          </ul>
          <p>Grâce à cela, nous avons un tableau de suivi. On peut définir des éléments de type Santé pour vérifier les remboursements.</p>
        </div>
      </div>
    );
  };
  
  export default DetailsEcritures;