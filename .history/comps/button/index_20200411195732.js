import React from "react";
import "./button.css";
import "../fonts/Baloo-Regular.ttf"

const Button = ({text, color, onClick}) => <div 
style={{backgroundColor:color }}
className="button_box"
onClick={onClick}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>

Button.defaultProps = {
    text:"Default Button",
    color:"#f2f2f2",

}

export default Button;