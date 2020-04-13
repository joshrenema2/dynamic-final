import React from "react";
import "./icons.css";

const Icon = ({height, width}) => <div 
style={{width:width, height:height }}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>

Icon.defaultProps = {
    width:"15vw",
    height:"15vh",
}

export default Icon;