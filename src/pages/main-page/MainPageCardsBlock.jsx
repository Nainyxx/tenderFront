import React, { useState, useEffect } from "react";
import MolniaLogo from "../../assets/molnia.svg";

function MainPageCardsBlock({ onTryFreeClick }) {
    const tenders = [
        { id: 1, title: "Разработка ПО для бизнеса", percent: "98%", price: "3 200 000 ₽", date: "18.02.2026" },
        { id: 2, title: "Кибербезопасность предприятия", percent: "85%", price: "6 500 000 ₽", date: "19.02.2026" },
        { id: 3, title: "ИТ-аутсорсинг и поддержка", percent: "92%", price: "5 100 000 ₽", date: "08.03.2026" },
    ];

    const [indices, setIndices] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndices((prev) => {
                const next = [...prev];
                next.unshift(next.pop());
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getCardStyle = (index) => {
        const styles = [
            { top: "0px", rotate: "-6deg", zIndex: 3, opacity: 1, scale: 1 },
            { top: "90px", rotate: "0deg", zIndex: 2, opacity: 0.9, scale: 0.95 },
            { top: "180px", rotate: "6deg", zIndex: 1, opacity: 0.8, scale: 0.9 } 
        ];
        return styles[index];
    };

    return (
        <div className="MainPageCardsBlock">
            <div className="MainPageCardsBlock_left-side">
                <div className="MainPageCardsBlock_DopText">
                    <div className="MainPageCardsBlock_Molnia">
                        <img className="MainPageCardsBlock_MolniaImg" src={MolniaLogo} alt="AI" />
                    </div>
                    <span>АИ-анализ тендерной документации</span>
                </div>
                
                <h1 className="MainPageCardsBlock_MainText">
                    Выигрывайте тендеры <br />
                    <span style={{ color: "#9CA3AF" }}>на автопилоте</span>
                </h1>
            </div>

            <div className="MainPageCardsBlock_right-side">
                <div className="CardsContainer">
                    {tenders.map((tender, i) => {
                        const style = getCardStyle(indices[i]);
                        return (
                            <div 
                                key={tender.id} 
                                className="TenderCard"
                                style={{
                                    top: style.top,
                                    zIndex: style.zIndex,
                                    transform: `rotate(${style.rotate}) scale(${style.scale})`,
                                    opacity: style.opacity
                                }}
                            >
                                <div className="TenderCard_Header">
                                    <span className="TenderCard_Title">{tender.title}</span>
                                    <div className="TenderCard_Badge">{tender.percent}</div>
                                </div>
                                <div className="TenderCard_Footer">
                                    <span>НМЦК: {tender.price}</span>
                                    <span className="dot">•</span>
                                    <span>Подача до {tender.date}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="MainPageCardBlock_bottom-side">
                <p className="MainPageCardsBlock_Desc">
                    TenderPilot находит релевантные тендеры по вашим SKU, анализирует документацию и автоматически готовит заявки. Экономьте до 80% времени на госзакупках.
                </p>
               <button 
                    className="MainPageCardsBlock_Btn"
                    onClick={onTryFreeClick}
                >
                    Попробовать бесплатно
                </button>
            </div>
        </div>
    );
}

export default MainPageCardsBlock;