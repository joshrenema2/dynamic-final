import React from "react";
import "./button.css";

const Button = ({text, onClick}) => <div className="button_container"><div 
className="button_box"
onClick={onClick}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>
</div>

Button.defaultProps = {
    text:"Default Button",
    width:"150px",
}

export default Button;