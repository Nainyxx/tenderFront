import React from 'react';
const MainPageForm = () => {
  return (
    <section className="MainPageForm_root">
      <div className="MainPageForm_container">
        
        {/* Левая часть: Текст */}
        <div className="MainPageForm_info">
          <span className="MainPageForm_badge">Начните сегодня</span>
          <h2 className="MainPageForm_title">Запросите бесплатное демо</h2>
          <p className="MainPageForm_desc">
            Оставьте заявку, и мы покажем, как TenderPilot поможет именно вашей компании находить и выигрывать тендеры.
          </p>

          <div className="MainPageForm_benefits_title">Что вы получите:</div>
          <div className="MainPageForm_benefits_grid">
            <span className="benefit_tag">Персональную демонстрацию платформы</span>
            <span className="benefit_tag">Анализ ваших текущих процессов</span>
            <span className="benefit_tag">Расчёт потенциальной экономии</span>
            <span className="benefit_tag">14 дней бесплатного доступа</span>
            <span className="benefit_tag">Помощь в настройке и загрузке SKU</span>
          </div>

          <div className="MainPageForm_contacts">
            <p className="contacts_label">Предпочитаете позвонить?</p>
            <a href="tel:88000000000" className="contacts_phone">8 800 000-00-00</a>
            <p className="contacts_sub">Бесплатно по России, пн-пт 9:00-18:00 МСК</p>
          </div>
        </div>

        {/* Правая часть: Форма */}
        <div className="MainPageForm_card_wrap">
          <div className="MainPageForm_card_glow"></div>
          <form className="MainPageForm_card">
            <div className="form_group">
              <label>ФИО *</label>
              <input type="text" placeholder="Иванов Иван Иванович" required />
            </div>
            
            <div className="form_group">
              <label>Номер телефона *</label>
              <input type="tel" placeholder="+7 (XXX) XXX-XX-XX" required />
            </div>

            <div className="form_group">
              <label>Почта *</label>
              <input type="email" placeholder="example@mail.ru" required />
            </div>

            <div className="form_group">
              <label>Комментарий</label>
              <textarea placeholder="Расскажите о вашей задаче..."></textarea>
            </div>

            <button type="submit" className="form_submit_btn">
              Запросить демо
            </button>
            
            <p className="form_policy">
              Нажимая кнопку, вы соглашаетесь с <a href="#">политикой конфиденциальности</a>.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default MainPageForm;
