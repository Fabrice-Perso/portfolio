import viewlogin from '../assets/img/projet_perso/view-login.webp';
import viewLoginExcel from '../assets/img/projet_perso/view-login-excel.webp';
const items = [
    {
      title: "2016",
      cardTitle: "V 1.0.0",
      cardSubtitle:"Fichier Excel avec des formules",
      media: {
        type: "IMAGE",
        source: {
          url: viewLoginExcel // Le chemin vers l'image de votre logo
        }
      },
        "languages": [
          { "name": "EXCEL" }
        ],
    },
    {
      title: "2020",
      cardTitle: "V 1.1.0",
      cardSubtitle: `Utilisation de macros avec userforms et connexion à une base de données Access.`,
      media: {
        type: "IMAGE",
        source: {
          url: viewLoginExcel // Le chemin vers l'image de votre logo
        }
      },
      "languages": [
        { "name": "EXCEL" },
        { "name": "VBA" }
      ],
    },
    {
      title: "07/2023",
      cardTitle: "V 2.0.0",
      cardSubtitle: `Conversion en format web pour pratiquer mes acquis, utilisation de HTML-SASS-JS pour le Front-End et PHP/MySQL pour le Back-End.`,
      media: {
        type: "IMAGE",
        source: {
          url: viewlogin // Le chemin vers l'image de votre logo
        }
      },
      "languages": [
        { "name": "HTML" },
        { "name": "CSS" },
        { "name": "PHP" },
        { "name": "JS" },
        { "name": "PHPMYADMIN" },
        { "name": "MYSQL" },        
      ],
    },
    {
      title: "10/2023",
      cardTitle: "V 3.0.0",
      cardSubtitle: `Migration vers React avec Vite.js et création d'une API pour le Back-End.`,
      cardDetailedText:`Message explicatif sur la version 3.0.0`,
      media: {
        type: "IMAGE",
        source: {
          url: viewlogin // Le chemin vers l'image de votre logo
        }
      },
      "languages": [
        { "name": "HTML"},
        { "name": "CSS"},
        { "name": "PHP" },
        { "name": "PHPMYADMIN" },
        { "name": "MYSQL" },
        { "name": "JS" },
        { "name": "SASS" },
        { "name": "NODE" },        
        { "name": "REACT" },
        { "name": "VITE.JS" },
        { "name": "REDUX" },
        { "name": "API" }
      ],
    }
  ];
  
  export default items;
  