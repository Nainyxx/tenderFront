import React from 'react';
import Logo from "../../assets/white-logo.svg"; // Или используй текст, если нет свг

const MainPageFooter = () => {
  return (
    <footer className="MainPageFooter_root">
      <div className="MainPageFooter_container">
        
        {/* Верхняя часть: Лого + Навигация */}
        <div className="MainPageFooter_main">
          
          {/* Колонка 1: Описание */}
          <div className="MainPageFooter_brand">
            <div className="MainPageFooter_logo_wrap">
              <img src={Logo} alt="Тендер Пилот" className="MainPageFooter_logo" />
              <span className="MainPageFooter_brand_name">Тен</span>
            </div>
            <p className="MainPageFooter_description">
              АИ-платформа для автоматизации поиска тендеров и подачи заявок. 
              Экономьте до 80% времени на госзакупках.
            </p>
            <div className="MainPageFooter_contacts">
              <a href="mailto:info@tenderpilot.ru">info@tenderpilot.ru</a>
              <a href="tel:88000000000">8 800 000-00-00</a>
              <span>Казань, Россия</span>
            </div>
          </div>

          {/* Колонка 2: Продукт */}
          <div className="MainPageFooter_nav_col">
            <h4 className="MainPageFooter_col_title">Продукт</h4>
            <a href="#">Возможности</a>
            <a href="#">Тарифы</a>
            <a href="#">Интеграции</a>
          </div>

          {/* Колонка 3: Компания */}
          <div className="MainPageFooter_nav_col">
            <h4 className="MainPageFooter_col_title">Компания</h4>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
            <a href="#">FAQ</a>
            <a href="#">Партнёрам</a>
          </div>

          {/* Колонка 4: Документы */}
          <div className="MainPageFooter_nav_col">
            <h4 className="MainPageFooter_col_title">Документы</h4>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Оферта</a>
          </div>
        </div>

        {/* Нижняя часть: Копирайт */}
        <div className="MainPageFooter_bottom">
          <div className="MainPageFooter_divider"></div>
          <div className="MainPageFooter_copy_row">
            <span className="copy_text">© 2026 Тендер Пилот. Все права защищены.</span>
            <span className="dev_text">ACRELIS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default MainPageFooter;
