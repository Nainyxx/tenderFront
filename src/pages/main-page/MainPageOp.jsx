import React, { useState, useEffect } from "react";
import SearchCard from "../../assets/search-card.svg";
import FirstCardSecondSvg from "../../assets/first-card-second.svg";

function MainPageOp() {
    return (
        <div className="MainPageOp_container">
            <div className="MainPageOp_head">Возможности</div>
            <h1 className="MainPageOp_head_main_text">Всё для победы в тендерах</h1>
            <p className="MainPageOp_head_dop_text">От умного поиска до автоматической подготовки документов.</p>
            <div className="MainPageOp_cards_container">
                <div className="MainPageOp_card">
                    <img className="MainPageOp_svg" src={SearchCard}></img>
                    <h1 className="MainPageOp_card_main_text">Часы на поиск тендеров</h1>
                    <p className="MainPageOp_card_dop_text">Ежедневный мониторинг десятков площадок отнимает 3-4 часа рабочего времени специалиста.</p>
                    <img className="MainPageOp_second_svg" src={FirstCardSecondSvg}></img>
                </div>
                <div className="MainPageOp_card">
                    
                </div>
                <div className="MainPageOp_card">
                    
                </div>
            </div>
        </div>
    )
}

export default MainPageOp;