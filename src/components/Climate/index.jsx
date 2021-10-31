import React from "react";
import  "./style.css";
import tempIcon from "./img/temp.svg";

const Climate = ({climate}) => {
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={tempIcon} alt="temperature icon" />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{climate.temperature}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {climate.humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button">+</button>
                <button className="button">-</button>
            </div>
        </div>
    )
}

export default Climate;