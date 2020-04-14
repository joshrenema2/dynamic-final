import React from "react";
import "./caption.css";

const Caption = ({size, text, maxWidth}) => <div
    style={{fontSize:size, maxWidth:maxWidth}}
    className="caption">
    {text}
</div>

Caption.defaultProps = {
    size:"16pt",
    text:"Caption",
    maxWidth:"60vw"
}

export default Caption;