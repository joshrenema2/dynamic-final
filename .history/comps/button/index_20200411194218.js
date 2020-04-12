import React from "react";
import "./button.css";

const Button = ({text, color, onClick}) => <div 
style={{backgroundColor:color, boxShadow:"1px 1px 5px "+ "#000000"}}
className="button_box"
onClick={onClick}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>

Button.defaultProps = {
    text:"Default Button",
    color:"#ffffff",

}

export default Button;