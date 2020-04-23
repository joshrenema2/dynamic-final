import React from "react";
import "./button.css";

const Button = ({text, color, onClick, width}) => <div 
style={{backgroundColor:color, width:width }}
className="button_box"
onClick={onClick}
>
    <div className="button_box_inner">
        {text}
    </div>
</div>

Button.defaultProps = {
    text:"Default Button",
    // color:"#f2f2f2",
    width:"150px",
}

export default Button;