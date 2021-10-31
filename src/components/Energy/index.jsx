import React from "react";
import  "./style.css";

import waterIcon from "./img/water.svg";
import electroIcon from "./img/electricity.svg";

const Energy = ({energy}) => {
    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={electroIcon} alt="electricity icon" />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Elektřina</div>
                    <div className="energy__value">{energy.electricity} kW</div>
                </div>
            </div>
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={waterIcon} alt="water icon" />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Voda</div>
                    <div className="energy__value">{energy.water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
    )
}

export default Energy;