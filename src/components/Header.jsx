import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <nav>
        <Link to="/#about">About</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#projectsformation">Projects Formation</Link>
        <Link to="/#projectsperso">Projects Perso</Link>
        <Link to="/Contact#contact">Contact</Link>
        </nav>
      </header>
    );
  }
  
  export default Header;
  