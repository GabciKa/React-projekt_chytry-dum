import React, {useState} from "react";
import  "./style.css";
import tempIcon from "./img/temp.svg";

const Climate = ({climate}) => {

    const[temp, setTemp] = useState(climate.temperature);

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={tempIcon} alt="temperature icon" />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temp}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {climate.humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={ () => { setTemp(temp+1) } }>+</button>
                <button className="button" onClick={ () => { setTemp(temp-1)} }>-</button>
            </div>
        </div>
    )
}

export default Climate;