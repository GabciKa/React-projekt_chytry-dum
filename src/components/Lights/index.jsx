import React from "react";
import  "./style.css"
import Light from "../Light";

const Lights = ({lights}) => {
    return (
        <div class="lights">
            {lights.map(light => <Light name={light.name} state={light.state} key={light.name}/>)}
        </div>
    )
}

export default Lights;