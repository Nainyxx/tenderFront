import React from 'react';
import ctaVisual from "../../assets/1.svg";

const MainPageCTA = ({ onTryFreeClick }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log("CTA button clicked"); // Для проверки
    if (onTryFreeClick) {
      onTryFreeClick();
    } else {
      console.log("onTryFreeClick is undefined in CTA");
    }
  };

  return (
    <section className="MainPageCTA_root">
      <div className="MainPageCTA_container">
        
        {/* Текстовый блок */}
        <div className="MainPageCTA_content">
          <h2 className="MainPageCTA_title">
            Готовы выигрывать больше тендеров?
          </h2>
          <p className="MainPageCTA_description">
            Присоединяйтесь к 500+ компаниям, которые уже автоматизировали работу с госзакупками и увеличили прибыль.
          </p>
          <button 
            className="MainPageCTA_button"
            onClick={handleButtonClick}
            type="button"
          >
            Попробовать бесплатно
          </button>
        </div>

        {/* Визуальный блок со свечением и твоим SVG */}
        <div className="MainPageCTA_visual_wrap">
            <div className="MainPageCTA_glow"></div>
            <img src={ctaVisual} alt="decoration" className="MainPageCTA_svg_image" />
        </div>

      </div>
    </section>
  );
};

export default MainPageCTA;