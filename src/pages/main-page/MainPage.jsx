import React, { useRef } from "react";

// Импорты частей страниц
import MainPageHeader from './MainPageHeader.jsx';
import MainPageCardsBlock from './MainPageCardsBlock.jsx';
import MainPagePercents from "./MainPagePercents.jsx";
import MainPageOp from "./MainPageOp.jsx";
import MainPageHowItWorks from "./MainPageHowItWorks.jsx"
import MainPageResults from "./MainPageResults.jsx"
import MainPageTariffs from "./MainPageTariffs.jsx";
import MainPageReviews from "./MainPageReviews.jsx";
import MainPageCTA from "./MainPageCTA.jsx"
import MainPageForm from "./MainPageForm.jsx";
import MainPageFooter from "./MainPageFooter.jsx";
import MainPageFAQ from "./MainPageFAQ.jsx";

import './MainPage.css';

function MainPage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    console.log("Scrolling to form"); // Для проверки
    formRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="MainPage">
      <MainPageHeader onTryFreeClick={scrollToForm} />
      <MainPageCardsBlock onTryFreeClick={scrollToForm} />
      <MainPagePercents />
      <MainPageOp />
      <MainPageHowItWorks />
      <MainPageResults />
      <MainPageTariffs onTryFreeClick={scrollToForm} />
      <MainPageReviews />
      <MainPageFAQ />
      <MainPageCTA onTryFreeClick={scrollToForm} />
      <div ref={formRef}>
        <MainPageForm />
      </div>
      <MainPageFooter />
    </div>
  );
}

export default MainPage;