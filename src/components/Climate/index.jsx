import React from "react";

import  "./style.css"

const Climate = () => {
    return (
        <div class="climate">
            <div class="climate__icon">
                <img src="./images/temp.svg"/>
            </div>
            <div class="climate__content">
                <div class="climate__temperature">24&deg;C</div>
                <div class="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
            </div>
            <div class="climate__controls">
                <button class="button">+</button>
                <button class="button">-</button>
            </div>
        </div>
    )
}

export default Climate;