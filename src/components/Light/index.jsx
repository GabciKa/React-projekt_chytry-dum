import React from "react";
import  "./style.css"

import ligthoff from "./img/light-off.svg";
import lighton from "./img/light-on.svg"

const Light = ({name, state}) => {

    const[lightOn, setLightOn] = useState(state)

    const handleClick = () => {
        lightOn === "on" ? setLightOn("off") : setLightOn("on")
    }

    return (
        <>
            <div class="light" onClick={handleClick}>
                    <div class="light__icon">
                        {lightOn === "on" ?
                            <img src={lighton} alt="icon light on"/> 
                            :
                            <img src={ligthoff} alt="icon light off"/>   
                        }
                    </div>
                    <div class="light__name">
                        {name}
                    </div>
            </div>
        </>
    )
}

export default Light;