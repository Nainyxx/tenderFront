import React, { useState } from 'react';

// Предполагаемые иконки (молния, здание, сейф)
import StartIcon from '../../assets/lightning-icon.svg';
import BusinessIcon from '../../assets/building.svg';
import CorpIcon from '../../assets/safe.svg';

const tariffs = [
  {
    id: 'start',
    icon: StartIcon,
    title: 'Старт',
    subtitle: 'Для малого бизнеса',
    price: '7 900',
    features: ['До 100 SKU', 'Мониторинг 3 площадок', '50 тендеров/месяц', 'Базовые шаблоны', 'Email-уведомления'],
    buttonText: 'Попробовать бесплатно',
    isPopular: false
  },
  {
    id: 'business',
    icon: BusinessIcon,
    title: 'Бизнес',
    subtitle: 'Для среднего бизнеса',
    price: '24 900',
    features: ['До 1000 SKU', 'Все площадки (8+)', 'Безлимит тендеров', 'AI-анализ документации', 'Интеграция 1С'],
    buttonText: 'Попробовать бесплатно',
    isPopular: true
  },
  {
    id: 'corp',
    icon: CorpIcon,
    title: 'Корпорация',
    subtitle: 'Для крупного бизнеса',
    price: 'По запросу',
    features: ['Безлимит SKU', 'Все площадки + кастомные', 'API доступ', 'Выделенный менеджер', 'SLA 99.9%'],
    buttonText: 'Попробовать бесплатно',
    isPopular: false
  }
];

function MainPageTariffs({ onTryFreeClick }) {  // ДОБАВЛЯЕМ ПРОПС
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="MainPageTariffs_root">
      <div className="MainPageTariffs_header">
        <span className="MainPageTariffs_badge">Тарифы</span>
        <h2 className="MainPageTariffs_mainTitle">Выберите подходящий план</h2>
        <p className="MainPageTariffs_subTitle">14 дней бесплатно. Без привязки карты.</p>
        
        {/* Переключатель периода */}
        <div className="MainPageTariffs_toggle_container">
          <button 
            className={`MainPageTariffs_toggle_btn ${!isAnnual ? 'active' : ''}`}
            onClick={() => setIsAnnual(false)}
          >
            Помесячно
          </button>
          <button 
            className={`MainPageTariffs_toggle_btn ${isAnnual ? 'active' : ''}`}
            onClick={() => setIsAnnual(true)}
          >
            Годовой <span className="discount">-20%</span>
          </button>
        </div>
      </div>

      <div className="MainPageTariffs_grid">
        {tariffs.map((plan) => (
          <div key={plan.id} className={`MainPageTariffs_card ${plan.isPopular ? 'MainPageTariffs_card_featured' : ''}`}>
            
            {/* Иконка и заголовки */}
            <div className="MainPageTariffs_card_head">
              <div className="MainPageTariffs_icon_wrap">
                <img src={plan.icon} alt="" />
              </div>
              <h3 className="MainPageTariffs_card_title">{plan.title}</h3>
              <p className="MainPageTariffs_card_subtitle">{plan.subtitle}</p>
            </div>

            {/* Цена */}
            <div className="MainPageTariffs_price_wrap">
              <span className="MainPageTariffs_price_val">{plan.price}</span>
              {plan.price !== 'По запросу' && <span className="MainPageTariffs_currency">Р/мес</span>}
            </div>

            {/* Кнопка с onClick */}
            <button 
              className={`MainPageTariffs_card_btn ${plan.isPopular ? 'btn_black' : 'btn_outline'}`}
              onClick={onTryFreeClick}  // ДОБАВЛЯЕМ ОБРАБОТЧИК
            >
              {plan.buttonText}
            </button>

            {/* Список преимуществ */}
            <ul className="MainPageTariffs_features_list">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="MainPageTariffs_feature_item">
                  <span className="check_icon">✓</span> {feature}
                </li>
              ))}
            </ul>

            {/* Свечение для популярного тарифа */}
            {plan.isPopular && <div className="MainPageTariffs_glow"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainPageTariffs;