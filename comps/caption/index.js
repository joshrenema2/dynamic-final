import React from "react";
import "./caption.css";

const Caption = ({text}) => <div
    className="caption">
    {text}
</div>

Caption.defaultProps = {
    text:"Caption",
}

export default Caption;