import React, {useState} from "react";
import  "./style.css"
import blindsOpen from "./img/blinds-open.svg";
import blindsClosed from "./img/blinds-closed.svg";

const Blinds = ({state}) => {

    const[blindsStatus, setBlindsStatus] = useState(state);

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindsStatus === "open" ? blindsOpen : blindsClosed} alt="blinds status icon" />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={blindsStatus === "open" ? "button button--active" : "button"} onClick={ () => {setBlindsStatus("open")}}>Otevřeno</button>
                <button className={blindsStatus === "closed" ? "button button--active" : "button"} onClick={ () => {setBlindsStatus("closed")}}>Zavřeno</button>
            </div>
        </div>
    )
}

export default Blinds;