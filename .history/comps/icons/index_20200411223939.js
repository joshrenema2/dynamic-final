import React from "react";
import "./icons.css";

const Icon = ({height, width}) => <div 
style={{width:width, height:height }}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>

Button.defaultProps = {
    text:"Default Button",
    color:"#f2f2f2",
}

export default Icon;