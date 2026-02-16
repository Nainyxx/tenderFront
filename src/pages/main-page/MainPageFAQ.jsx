import React, { useState } from 'react';

const MainPageFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Как работает контекстный поиск по SKU?",
      answer: "Вы загружаете вашу номенклатуру (артикулы, названия, характеристики товаров) из 1C, Excel или вручную. Наш AI анализирует техническое задание каждого тендера и сопоставляет требования с вашими товарами. Это не простой поиск по ключевым словам — система понимает контекст и находит тендеры, где действительно нужны ваши позиции."
    },
    { question: "Какие площадки вы мониторите?", answer: "" },
    { question: "Есть ли пробный период?", answer: "" },
    { question: "Можно ли подключить несколько юрлиц?", answer: "" },
    { question: "Как система генерирует документы?", answer: "" }
  ];

  return (
    <div className="MainPageFAQ_container">
      <div className="MainPageFAQ_sidebar">
        <span className="MainPageFAQ_badge">FAQ</span>
        <h1 className="MainPageFAQ_title">Частые вопросы</h1>
        <p className="MainPageFAQ_subtitle">
          Не нашли ответ на свой вопрос? Напишите нам, и мы с радостью поможем.
        </p>
        <button className="MainPageFAQ_button">
          Задать вопрос <span className="MainPageFAQ_icon">💬</span>
        </button>
      </div>

      <div className="MainPageFAQ_list">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`MainPageFAQ_item ${openIndex === index ? 'MainPageFAQ_item--active' : ''}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="MainPageFAQ_questionRow">
              <span className="MainPageFAQ_questionText">{item.question}</span>
              <span className={`MainPageFAQ_arrow ${openIndex === index ? 'MainPageFAQ_arrow--up' : ''}`}>
                ⌄
              </span>
            </div>
            {openIndex === index && (
              <div className="MainPageFAQ_answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPageFAQ;
