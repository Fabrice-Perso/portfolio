import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="header">
        <nav>
        <Link to="/#about">A propos</Link>
        <Link to="/#skills">Compétences</Link>
        <Link to="/#projectsformation">CV</Link>
        <Link to="/#projectsformation">Projets en Formation</Link>
        <Link to="/#projectsformation">Projets en Entreprise</Link>
        <Link to="/#projectsperso">Projet Personnel</Link>
        <Link to="/Contact#contact">Contact</Link>
        </nav>
      </header>
    );
  }
  
  export default Header;
  