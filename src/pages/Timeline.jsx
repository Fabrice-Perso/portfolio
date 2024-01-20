import { Chrono } from "react-chrono";
import itemsData  from "./data";
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi, LogoNode, LogoRedux,LogoMySql,LogoPHP,LogoPhpmyadmin,LogoExcel,LogoVba } from "../assets/images";

const Timeline = () => {
    const getLanguageLogo = (languageName) => {
        switch (languageName) {
            case 'HTML': return LogoHTML;
            case 'CSS': return LogoCss;
            case 'SASS': return LogoSass;
            case 'JS': return LogoJS;
            case 'REACT': return LogoReact;
            case 'VITE.JS': return LogoVite;
            case 'API': return LogoApi;
            case 'NODE': return LogoNode;
            case 'REDUX': return LogoRedux;
            case 'MYSQL': return LogoMySql;
            case 'PHP': return LogoPHP;
            case 'PHPMYADMIN': return LogoPhpmyadmin;
          case 'EXCEL': return LogoExcel;
          case 'VBA': return LogoVba;
          // ... et ainsi de suite pour les autres compétences
          default: return null; // ou une image par défaut si vous en avez une
        }
      };

    // Fonction pour comparer les dates
    const compareVersions = (a, b) => {
        const extractVersion = (title) => {
          const versionMatch = title.match(/V (\d+\.\d+\.\d+)/);
          return versionMatch ? versionMatch[1] : null;
        };
      
        const versionA = extractVersion(a.cardTitle);
        const versionB = extractVersion(b.cardTitle);
      
        if (!versionA || !versionB) return 0; // Si l'un des titres n'a pas de version
      
        return versionB.localeCompare(versionA, undefined, { numeric: true, sensitivity: 'base' });
      };

    // Trier les éléments par date en ordre décroissant
    const sortedItemsData = [...itemsData].sort(compareVersions);

    const itemsWithImages = sortedItemsData.map(item => ({
        ...item,
        cardTitle: (
            <span className="testcolor">
              {item.cardTitle}
            </span>
          ),
        cardSubtitle: (
            <span className="customSpanStyle">
              {item.cardSubtitle}
            </span>
          ),
          cardDetailedText: (
            <>
            <span >
            {item.cardDetailedText}
            </span>
            <div className="cardStyle">
              {item.languages.map(lang => (
                <span key={lang.name} className="card">
                  <img className="logoStyle"
                    src={getLanguageLogo(lang.name)}
                    alt={lang.name}                    
                  />
                </span>
              ))}
            </div>
            </>
          )
        }));
  
    return (
      <div className="Timeline">
        <h2 className="section-title" id="timeline">Chronologie</h2>
        <div style={{ width: "100%", height: "500px" }}> {/* Ajustez la hauteur comme nécessaire */}
            <Chrono items={itemsWithImages} mode="VERTICAL_ALTERNATING" cardHeight={10} hideControls 
            enableBreakPoint verticalBreakPoint={800}
            />
      </div>
    </div>
  );
}

export default Timeline;