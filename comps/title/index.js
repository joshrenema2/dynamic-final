import React from "react";
import "./title.css";

const Title = ({size, text}) => <div
    style={{fontSize:size}}
    className="title">
    {text}
</div>

Title.defaultProps = {
    size:"48pt",
    text:"Header"
}

export default Title;