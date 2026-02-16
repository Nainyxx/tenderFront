import React from "react";
const steps = [
  { id: "01", title: "Загрузите базу SKU", desc: "Импортируйте вашу номенклатуру на 1C, Excel или введите вручную. Укажите категории и характеристики товаров." },
  { id: "02", title: "Система находит тендеры", desc: "AI анализирует все площадки и находит тендеры, где требуются ваши товары или услуги. Контекстный поиск исключает нерелевантные." },
  { id: "03", title: "Готовим документы", desc: "На основе требований заказчика автоматически формируем пакет документов: письма о соответствии, формы заявок, спецификации.", isHighlighted: true },
  { id: "04", title: "Подаёте заявку", desc: "Проверьте готовую заявку и подайте её на площадку в один клик. Отслеживайте статус и получайте уведомления." }
];

function HowItWorks() {
  return (
    <section className="HIW_section">
      <div className="HIW_header">
        <div className="HIW_badge">Как это работает</div>
        <h1 className="HIW_title">4 простых шага к победе</h1>
        <p className="HIW_subtitle">
          От регистрации до подачи первой заявки — всего 15 минут. Никакого обучения, всё интуитивно понятно.
        </p>
      </div>

      <div className="HIW_container">
        <div className="HIW_main_line"></div>
        <div className="HIW_steps_grid">
          {steps.map((step) => (
            <div key={step.id} className="HIW_step_column">
              <div className="HIW_dot_wrapper">
                <div className="HIW_custom_dot">
                   <div className="HIW_dot_outer"></div>
                   <div className="HIW_dot_middle"></div>
                   <div className="HIW_dot_inner"></div>
                </div>
              </div>

              <div className={`HIW_step_card ${step.isHighlighted ? 'HIW_card_active' : ''}`}>
                {step.isHighlighted && (
                  <div className="HIW_glow_container">
                    <div className="glow_item glow_top"></div>
                    <div className="glow_item glow_mid"></div>
                    <div className="glow_item glow_bottom"></div>
                  </div>
                )}
                <div className="HIW_card_content">
                    <div className="HIW_step_num">{step.id}</div>
                    <h3 className="HIW_step_name">{step.title}</h3>
                    <p className="HIW_step_text">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
