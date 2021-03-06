import React from "react";
import "./button.css";

const Button = ({text, color, onClick}) => <div 
style={{backgroundColor:color}}
className="button_box"
onClick={onClick}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>

Button.defaultProps = {
    text:"Default Button",
    color:"#28524b",
}

export default Button;