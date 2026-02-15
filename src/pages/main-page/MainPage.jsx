import React from "react";

// Импорты частей страниц
import MainPageHeader from './MainPageHeader.jsx';
import MainPageCardsBlock from './MainPageCardsBlock.jsx';
import MainPagePercents from "./MainPagePercents.jsx";
import MainPageOp from "./MainPageOp.jsx";

import './MainPage.css';

function MainPage() {
  
  return (
    <div className="MainPage">
      <MainPageHeader />
      <MainPageCardsBlock />
      <MainPagePercents />
      <MainPageOp />
    </div>
  );
}

export default MainPage;