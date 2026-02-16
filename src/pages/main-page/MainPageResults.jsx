import React from 'react';

import MoneyIcon from '../../assets/money.svg';
import ArrowsIcon from '../../assets/arrows.svg';
import ClockIcon from '../../assets/clock.svg';
import TargetIcon from '../../assets/target.svg';
import MedalIcon from '../../assets/medal.svg';

const MainPageResults = () => {
  return (
    <section className="MainPageResults_root">
      <div className="MainPageResults_container">
        <div className="MainPageResults_header">
          <span className="MainPageResults_badge">Результаты</span>
          <h2 className="MainPageResults_mainTitle">Измеримая выгода для бизнеса</h2>
          <p className="MainPageResults_subTitle">
            Наши клиенты получают реальные результаты уже в первый месяц работы.
          </p>
        </div>

        <div className="MainPageResults_grid">
          {/* 1. ROI — Деньги */}
          <div className="MainPageResults_card area_roi">
            <div className="MainPageResults_glow"></div>
            <div className="MainPageResults_cardContent">
              <h3 className="MainPageResults_value">2.5M ₽</h3>
              <span className="MainPageResults_label">средний ROI/год</span>
              <p className="MainPageResults_description">Окупаемость в первый месяц.</p>
            </div>
            <img src={MoneyIcon} alt="" className="MainPageResults_bg_icon" />
          </div>

          {/* 2. Конверсия — Стрелки (Центральная) */}
          <div className="MainPageResults_card area_conversion card_active">
            <div className="MainPageResults_glow"></div>
            <div className="MainPageResults_cardContent">
              <h3 className="MainPageResults_value">+45%</h3>
              <span className="MainPageResults_label">рост конверсии</span>
              <p className="MainPageResults_description">Повышаем шансы на победу за счет качества.</p>
            </div>
            <img src={TargetIcon} alt="" className="MainPageResults_bg_icon" />
          </div>

          {/* 3. Заявки — Медаль */}
          <div className="MainPageResults_card area_requests">
            <div className="MainPageResults_glow"></div>
            <div className="MainPageResults_cardContent">
              <h3 className="MainPageResults_value">3x</h3>
              <span className="MainPageResults_label">больше заявок</span>
              <p className="MainPageResults_description">Больше тендеров в работе.</p>
            </div>
            <img src={ArrowsIcon} alt="" className="MainPageResults_bg_icon" />
          </div>

          {/* 4. Время — Часы */}
          <div className="MainPageResults_card area_time">
            <div className="MainPageResults_glow"></div>
            <div className="MainPageResults_cardContent">
              <h3 className="MainPageResults_value">80%</h3>
              <span className="MainPageResults_label">экономия времени</span>
              <p className="MainPageResults_description">Автоматизация рутинных задач.</p>
            </div>
            <img src={ClockIcon} alt="" className="MainPageResults_bg_icon" />
          </div>

          {/* 5. Точность — Мишень */}
          <div className="MainPageResults_card area_accuracy">
            <div className="MainPageResults_glow"></div>
            <div className="MainPageResults_cardContent">
              <h3 className="MainPageResults_value">99.9%</h3>
              <span className="MainPageResults_label">точность данных</span>
              <p className="MainPageResults_description">Без ошибок в документах.</p>
            </div>
            <img src={MedalIcon} alt="" className="MainPageResults_bg_icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageResults;
