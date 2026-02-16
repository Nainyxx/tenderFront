import React from "react";
import SearchCard from "../../assets/search-card.svg";
import FirstCardSecondSvg from "../../assets/first-card-second.svg";
import FilterIcon from "../../assets/filter.svg";
import WordsIcon from "../../assets/words.svg";
import DocumentIcon from "../../assets/document.svg";
import DocsIcon from "../../assets/docs.svg";
import TenderBolIcon from "../../assets/tender-bol.svg";

function MainPageOp() {
    return (
        <div className="MainPageOp_container">
            {/* Секция Возможности */}
            <div className="MainPageOp_header_section">
                <div className="MainPageOp_head"><span>Возможности</span></div>
                <h1 className="MainPageOp_head_main_text">Всё для победы в тендерах</h1>
                <p className="MainPageOp_head_dop_text">От умного поиска до автоматической подготовки документов.</p>
            </div>

            {/* Контейнер с карточками */}
            <div className="MainPageOp_cards_container">
                {/* Карточка 1 */}
                <div className="MainPageOp_card">
                    <img className="MainPageOp_svg" src={SearchCard} alt="Search icon" />
                    <h2 className="MainPageOp_card_main_text">Часы на поиск тендеров</h2>
                    <p className="MainPageOp_card_dop_text">Ежедневный мониторинг десятков площадок отнимает 3-4 часа рабочего времени специалиста.</p>
                    <img className="MainPageOp_second_svg" src={FirstCardSecondSvg} alt="Search preview" />
                </div>

                {/* Карточка 2 */}
                <div className="MainPageOp_card">
                    <img className="MainPageOp_svg" src={FilterIcon} alt="Filter icon" />
                    <h2 className="MainPageOp_card_main_text">Умные исключающие слова</h2>
                    <p className="MainPageOp_card_dop_text">AI понимает контекст и исключает нерелевантные тендеры автоматически.</p>
                    <img className="MainPageOp_second_svg" src={WordsIcon} alt="Words tags" />
                </div>

                {/* Карточка 3 */}
                <div className="MainPageOp_card">
                    <img className="MainPageOp_svg" src={DocumentIcon} alt="Document icon" />
                    <h2 className="MainPageOp_card_main_text">Автогенерация документов</h2>
                    <p className="MainPageOp_card_dop_text">Формируем письма о соответствии, заполняем формы заявок, собираем пакет документов.</p>
                    <img className="MainPageOp_second_svg" src={DocsIcon} alt="Documents preview" />
                </div>
            </div>

            {/* Отдельный див для блока "Боль" */}
            <div className="MainPageOp_pain_container">
                <div className="MainPageOp_pain_content">
                    <h2 className="MainPageOp_pain_title">Работа с тендерами — это боль</h2>
                    <p className="MainPageOp_pain_desc">
                        Каждый день компании теряют время, деньги и выгодные контракты из-за неэффективных процессов работы с госзакупками.
                    </p>
                </div>
                <img className="MainPageOp_pain_svg" src={TenderBolIcon} alt="Pain icon" />
            </div>
        </div>
    );
}

export default MainPageOp;
