import React, { useRef, useState, useEffect } from 'react';
import quoteIcon from "../../assets/Quote-icon.svg";

const reviews = [
  {
    id: 1,
    text: "Платформа действительно помогает экономить время. Раньше на поиск тендеров уходили часы, теперь всё автоматизировано. Удобный интерфейс и быстрая поддержка.",
    stars: 5,
    author: "Алексей Иванов",
    pos: "Генеральный директор, ООО СтройИнвест",
    isGreen: true
  },
  {
    id: 2,
    text: "Благодаря сервису мы увеличили количество побед в тендерах на 40%. Система точно подбирает релевантные закупки и помогает не пропускать важные события.",
    stars: 5,
    author: "Екатерина Смирнова",
    pos: "Руководитель отдела продаж, ТехноСнаб",
    isGreen: false
  },
  {
    id: 3,
    text: "Отличный инструмент для аналитики. Видим всех конкурентов, их цены и стратегии. Это помогает нам предлагать более выгодные условия и выигрывать торги.",
    stars: 4,
    author: "Дмитрий Козлов",
    pos: "Коммерческий директор, ПромТех",
    isGreen: false
  },
  {
    id: 4,
    text: "Автоматическое заполнение документов сэкономило нам кучу времени. Исключили человеческие ошибки при подготовке заявок. Рекомендую!",
    stars: 5,
    author: "Ольга Новикова",
    pos: "Тендерный специалист, СтройГрупп",
    isGreen: false
  },
  {
    id: 5,
    text: "Сервис помог нам выйти на новые рынки и найти заказчиков, о которых мы даже не знали. Удобные фильтры и быстрый поиск действительно работают.",
    stars: 5,
    author: "Михаил Петров",
    pos: "Собственник бизнеса, МебельПро",
    isGreen: false
  },
  {
    id: 6,
    text: "Сократили время на подготовку тендерной документации в 3 раза. Очень удобно, что все шаблоны уже загружены в систему и автоматически подставляются.",
    stars: 5,
    author: "Анна Соколова",
    pos: "Тендерный менеджер, МедТех",
    isGreen: true
  },
  {
    id: 7,
    text: "Система помогла нам структурировать работу с тендерами. Теперь вся информация хранится в одном месте, ничего не теряется.",
    stars: 4,
    author: "Сергей Волков",
    pos: "Заместитель директора, ЭнергоСтрой",
    isGreen: false
  },
  {
    id: 8,
    text: "Очень довольны сервисом. Уведомления о новых тендерах приходят мгновенно, ничего не пропускаем. За год выиграли на 30% больше контрактов.",
    stars: 5,
    author: "Наталья Морозова",
    pos: "Начальник тендерного отдела, ПромСнаб",
    isGreen: false
  },
  {
    id: 9,
    text: "Интуитивно понятный интерфейс, разобрались за один день. Поддержка всегда на связи и помогает решить любые вопросы.",
    stars: 5,
    author: "Игорь Степанов",
    pos: "Индивидуальный предприниматель",
    isGreen: false
  },
  {
    id: 10,
    text: "Раньше боялись участвовать в тендерах из-за сложности оформления. Теперь система сама проверяет документы на ошибки и подсказывает, что исправить.",
    stars: 4,
    author: "Татьяна Кузнецова",
    pos: "Собственник бизнеса, Чистый Мир",
    isGreen: true
  },
  {
    id: 11,
    text: "Благодаря аналитике конкурентов стали лучше понимать рынок и предлагать более выгодные условия. Результат - рост выручки на 25%.",
    stars: 5,
    author: "Андрей Лебедев",
    pos: "Финансовый директор, СтройКомплект",
    isGreen: false
  },
  {
    id: 12,
    text: "Отличная платформа для начинающих. Обучающие материалы и вебинары помогли быстро вникнуть во все тонкости тендерных закупок.",
    stars: 5,
    author: "Елена Васильева",
    pos: "Начинающий предприниматель",
    isGreen: false
  },
  {
    id: 13,
    text: "Используем сервис уже 2 года. За это время окупили все вложения многократно. Особенно нравится мобильное приложение - можно быть в курсе событий в любой точке.",
    stars: 5,
    author: "Павел Семенов",
    pos: "Руководитель отдела закупок, ГрандСтрой",
    isGreen: true
  },
  {
    id: 14,
    text: "Очень удобный поиск по регионам и отраслям. Находим заказчиков именно в тех сегментах, где мы работаем. Качество лидов отличное.",
    stars: 4,
    author: "Мария Федорова",
    pos: "Менеджер по развитию, ЛогистикПро",
    isGreen: false
  },
  {
    id: 15,
    text: "Система помогла автоматизировать рутину. Теперь специалисты занимаются стратегией, а не заполнением бумаг. Команда счастлива, результаты растут.",
    stars: 5,
    author: "Денис Григорьев",
    pos: "Операционный директор, ТехноПром",
    isGreen: false
  },
  {
    id: 16,
    text: "Интеграция с нашей CRM прошла гладко. Теперь все данные о тендерах синхронизируются автоматически. Большое спасибо команде разработки!",
    stars: 5,
    author: "Кирилл Андреев",
    pos: "IT-директор, АльфаСтрой",
    isGreen: false
  },
  {
    id: 17,
    text: "Поначалу сомневался, стоит ли переходить с Excel на специализированный сервис. Теперь понимаю, что это было лучшее решение для нашего бизнеса.",
    stars: 4,
    author: "Владимир Соловьев",
    pos: "Главный инженер, СпецТехМонтаж",
    isGreen: true
  },
  {
    id: 18,
    text: "Очень радует скорость работы техподдержки. Любые вопросы решаются в течение часа. Чувствуется клиентоориентированность компании.",
    stars: 5,
    author: "Анастасия Белова",
    pos: "Тендерный специалист, ФармГрупп",
    isGreen: false
  },
  {
    id: 19,
    text: "Благодаря сервису нашли крупного заказчика из другого региона, о котором даже не подозревали. Теперь расширяем географию присутствия.",
    stars: 5,
    author: "Георгий Николаев",
    pos: "Директор по развитию, ТоргСнаб",
    isGreen: false
  },
  {
    id: 20,
    text: "Удобные инструменты для анализа цен конкурентов. Помогает формировать оптимальное коммерческое предложение и увеличивать шансы на победу.",
    stars: 4,
    author: "Роман Жуков",
    pos: "Руководитель тендерного отдела, ЭлектроСтрой",
    isGreen: true
  }
];

function MainPageReviews() {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  // Синхронизация прогресса при скролле карточек
  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgress(isNaN(scrollPercent) ? 0 : scrollPercent);

      const cardWidth = 404; 
      const index = Math.min(Math.max(Math.floor((scrollLeft + 50) / cardWidth) + 1, 1), reviews.length);
      setCurrentIndex(index);
    }
  };

  // Обработка начала перетаскивания
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    handleDrag(e);
  };

  // Обработка перетаскивания
  const handleDrag = (e) => {
    if (trackRef.current && scrollRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();
      let clickX = e.clientX - trackRect.left;
      
      // Ограничиваем по ширине трека
      clickX = Math.max(0, Math.min(clickX, trackRect.width));
      
      const percent = clickX / trackRect.width;
      const scrollTarget = (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) * percent;
      
      scrollRef.current.scrollLeft = scrollTarget;
      setProgress(percent * 100);
      
      // Обновляем текущий индекс
      const cardWidth = 404;
      const index = Math.min(Math.max(Math.floor((scrollTarget + 50) / cardWidth) + 1, 1), reviews.length);
      setCurrentIndex(index);
    }
  };

  // Обработка движения мыши
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        handleDrag(e);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="MainPageReviews_root">
      <div className="MainPageReviews_header">
        <div className="MainPageReviews_badge">Отзывы</div>
        <h2 className="MainPageReviews_title">Нам доверяют 500+ компаний</h2>
        <p className="MainPageReviews_subtitle">От малого бизнеса до крупных корпораций.</p>
      </div>

      <div className="MainPageReviews_scroll_wrap">
        <div 
          className="MainPageReviews_container" 
          ref={scrollRef} 
          onScroll={handleScroll}
        >
          {reviews.map((rev) => (
            <div key={rev.id} className={`MainPageReviews_card ${rev.isGreen ? 'MainPageReviews_card_green' : ''}`}>
              <div className="MainPageReviews_card_head">
                <span className="MainPageReviews_card_tag">Отзывы</span>
              </div>
              <p className="MainPageReviews_text">{rev.text}</p>
              <div className="MainPageReviews_stars">
                {[...Array(rev.stars)].map((_, i) => <span key={i} className="MainPageReviews_star">★</span>)}
              </div>
              <div className="MainPageReviews_footer">
                <div className="MainPageReviews_author_wrap">
                  <div className="MainPageReviews_author_avatar"></div>
                  <div className="MainPageReviews_author_info">
                    <p className="MainPageReviews_author_name">{rev.author}</p>
                    <span className="MainPageReviews_author_pos">{rev.pos}</span>
                  </div>
                </div>
                <img src={quoteIcon} alt="quote" className="MainPageReviews_quote_img" />
              </div>
              {rev.isGreen && <div className="MainPageReviews_glow"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="MainPageReviews_progress_section">
        <div className="MainPageReviews_progress_container">
          <div className="MainPageReviews_progress_info">{currentIndex}/{reviews.length}</div>
          
          {/* Скроллбар */}
          <div 
            className={`MainPageReviews_scroll_track ${isDragging ? 'dragging' : ''}`}
            ref={trackRef}
            onMouseDown={handleMouseDown}
          >
            <div 
              className="MainPageReviews_scroll_thumb" 
              style={{ width: `${100 / reviews.length}%`, left: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPageReviews;