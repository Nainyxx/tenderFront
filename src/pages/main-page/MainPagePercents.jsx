import React, { useState, useEffect } from "react";

function MainPagePercents() {

    return (
        <div className="MainPagePercents">
            <div className="MainPagePercents_one_div">
                <span className="MainPagePercents_main_text">80%</span>
                <span className="MainPagePercents_dop_text">экономия времени</span>
            </div>
            <div className="MainPagePercents_one_div">
                <span className="MainPagePercents_main_text">3х</span>
                <span className="MainPagePercents_dop_text">больше заявок</span>
            </div>
            <div className="MainPagePercents_one_div">
                <span className="MainPagePercents_main_text">500+</span>
                <span className="MainPagePercents_dop_text">компаний доверяют</span>
            </div>
        </div>
    )
}

export default MainPagePercents;