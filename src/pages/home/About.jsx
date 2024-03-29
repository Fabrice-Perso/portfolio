// About.js

import { ProfilImage } from "../../assets/images";

const About = () => (
  <>
    <h2 className="section-title">À propos de moi</h2>
    <div className="about-content">
      <img src={ProfilImage} alt="Fabrice MAGNAN de BELLEVUE" className="profile-photo" />
      <p className="About_Me">
        {`Bonjour, je suis Fabrice MAGNAN de BELLEVUE. Autodidacte passionné, j'ai entamé ma carrière dans le support client allant du niveau 0 au 2 (support métier - technique) puis dans la migration de données (expertise dans la manipulation de données), fort de plus de 15 ans d'expérience. Cette période m'a permis d'acquérir une solide base technique et métier, ce qui me permet aujourd'hui d'être capable d'héberger mon portfolio sur mon propre serveur NAS.`}

        <br /><br />

        {`Mon parcours m'a amené à réaliser un projet web en entreprise, où j'ai gagné la confiance de mes responsables bien avant d'être officiellement développeur. J'ai appris les bonnes pratiques auprès de collègues développeurs et maîtrisé plusieurs langages et technologies. Travaillant principalement pour des éditeurs de logiciels, j'ai adopté la méthode agile et me suis familiarisé avec la gestion de projets.`}

        <br /><br />

        {`Mes compétences s'étendent au-delà du développement technique : j'ai une connaissance approfondie en comptabilité et en immobilier, et j'ai créé des outils d'automatisation sur Excel, puis sur Access, et enfin sous forme d'outil web. Ces projets personnels et professionnels m'ont permis d'appliquer concrètement mes connaissances, alliant ma maîtrise du SQL et l'utilisation de DevOps pour le versioning.`}

        <br /><br />

        {`Mon expérience en hotline m'a enseigné à m'adapter aux différents interlocuteurs pour expliquer des concepts techniques et métier. Cette polyvalence me permet aujourd'hui de développer des outils métier efficaces, comme mon projet personnel de gestion comptable, témoignant de mon aptitude à créer des solutions informatiques adaptées et innovantes.`}
      </p>
    </div>
  </>
);

export default About;
