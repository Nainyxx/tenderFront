import React from "react";
import MainPageHeader from './MainPageHeader.jsx';
import MainPageCardsBlock from './MainPageCardsBlock.jsx';
import './MainPage.css';

function MainPage() {
  
  return (
    <div className="MainPage">
      <MainPageHeader />
      <MainPageCardsBlock />
    </div>
  );
}

export default MainPage;