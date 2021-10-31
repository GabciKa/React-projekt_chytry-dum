import React, {useState} from "react";
import  "./style.css"

import ligthoff from "./img/light-off.svg";
import lighton from "./img/light-on.svg";

const Light = ({name, state}) => {

    const[lightOn, setLightOn] = useState(state)

    const handleClick = () => {
        lightOn === "on" ? setLightOn("off") : setLightOn("on")
    }

    return (
        <>
            <div className="light" onClick={handleClick}>
                    <div className="light__icon">
                        {lightOn === "on" ?
                            <img src={lighton} alt="icon light on"/> 
                            :
                            <img src={ligthoff} alt="icon light off"/>   
                        }
                    </div>
                    <div className="light__name">
                        {name}
                    </div>
            </div>
        </>
    )
}

export default Light;