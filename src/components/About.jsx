import { ProfilImage } from "../assets/images";
// About.js

const About = () => (
  <>
    <h2 className="section-title">À propos de moi</h2>
    <div className="about-content">
      <img src={ProfilImage} alt="Fabrice MAGNAN de BELLEVUE" className="profile-photo" />
      <p className="About_Me">
        {"Bonjour, je m'appelle Fabrice MAGNAN de BELLEVUE."} <br /><br />
        {"Après plus de 15 ans dans le monde du travail sur des postes de supports clients/techniciens ou migrateur de données, j'ai choisi de faire une reconversion professionnelle pour devenir"} <strong>Développeur Web</strong>.
        </p>
    </div>
  </>
);

export default About;