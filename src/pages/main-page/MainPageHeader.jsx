import React, { useState, useEffect } from "react";
import Logo from '../../assets/logo.svg';

function MainPageHeader() {
    return (
        <header className="MainPageHeader">
            <img className="MainPageHeader_Logo" src={Logo}></img>
            <div className="MainPageHeader_Navigation">
                <div className="MainPageHeader_Text">
                    <span className="MainPageHeader_Text">Поиск тендеров</span>
                    <span className="MainPageHeader_Text">Возможности</span>
                    <span className="MainPageHeader_Text">О нас</span>
                    <span className="MainPageHeader_Text">Тарифы</span>
                    <span className="MainPageHeader_Text">Контакты</span>
                </div>
                <div className="MainPageHeader_Buttons">
                    <button className="MainPageHeader_Button">Регистрация</button>
                    <button className="MainPageHeader_Button">Вход</button>
                </div> 
            </div>
        </header>
    )
}

export default MainPageHeader;