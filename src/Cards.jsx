import React, { useEffect } from "react";
import "./style/Cards.scss";

const Cards = function () {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".element");
      const triggerHeight = window.innerHeight / 2; // Punkt aktywacji efektu

      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerHeight) {
          el.classList.add("slide-out");
        } else {
          el.classList.remove("slide-out");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper-cards">
      <div className="slide-left">
        <div className="element">1</div>
      </div>
      <div className="slide-left">
        <div className="element">2</div>
      </div>
      <div className="slide-left">
        <div className="element">3</div>
      </div>
    </div>
  );
};

export default Cards;
