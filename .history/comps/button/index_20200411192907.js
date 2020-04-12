import React from "react";
import "./button.css";

const Button = ({text, color, onClick}) => <div 
style={{backgroundColor:color, boxShadow:"1px 1px 5px "+color}}
className="custom_button_box"
onClick={onClick}
>
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

function ButtonClick(){
    alert("Clicked");
}

Button.defaultProps = {
    text:"Default Button",
    color:"#000000",
    onClick:ButtonClick,
}

export default Button;