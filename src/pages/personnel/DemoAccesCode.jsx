import { FaGithub } from 'react-icons/fa6';
import { IoIosRocket } from 'react-icons/io';

const DemoAccesCode = () => {
  return (
    <div className="demo-acces-code">
      <h2 className="section-title">Démonstration et accès au code :</h2>
      <p>{"Je peux vous faire une démonstration de l'outil, vous donner les paramètres de connexion pour un compte test ou vous donner accès à mon code via GitHub."}</p>
      <div className="buttons">
        <a className="button-projet" href="https://fabwebprojects.fr/Mon_Budget_Perso/connexion.php" target="_blank" rel="noreferrer">
          <IoIosRocket className="icon button-icon" />
          Voir le projet
        </a>
        <a className="button-github" href="https://github.com/user/repo" target="_blank" rel="noreferrer">
          <FaGithub className="icon button-icon" />
          Code sur GitHub
        </a>
      </div>
    </div>
  );
};

export default DemoAccesCode;