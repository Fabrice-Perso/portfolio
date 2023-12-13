/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/layout/_banner.scss";

const Banner = ({ slides, bannerId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    const timer = setInterval(changeSlide, 10000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  const handleArrowClick = (direction) => {
    setCurrentIndex(direction === "left" ? (currentIndex === 0 ? slides.length - 1 : currentIndex - 1) : (currentIndex + 1) % slides.length);
  };

  const isExternalLink = (link) => {
    // Une façon simple de vérifier si le lien est externe
    return /^(http|https):\/\//.test(link);
  };

  return (
    <div id={bannerId} className="carroussel">
      <div className="banner-content">
        {isExternalLink(currentSlide.link) ? (
          <a href={currentSlide.link} target="_blank" rel="noopener noreferrer" className="banner-link">
            <img src={currentSlide.image} alt="Banner" className="banner-img" />
          </a>
        ) : (
          <Link to={currentSlide.link} className="banner-link">
            <img src={currentSlide.image} alt="Banner" className="banner-img" />
          </Link>
        )}
        <FaChevronCircleLeft className="arrow_left" onClick={() => handleArrowClick("left")} />
        <FaChevronCircleRight className="arrow_right" onClick={() => handleArrowClick("right")} />
        <p className="description">
          {" "}
          {currentSlide.tagLine.text} <span>{currentSlide.tagLine.htmlContent}</span>
        </p>

        <div className="dots">
          {slides.map((_, index) => (
            <div key={index} className={`dot ${currentIndex === index ? "dot_selected" : ""}`} onClick={() => setCurrentIndex(index)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
