import React from "react";
import "./icons.css";

const defaultImg = require("../../img/recycle.png");

const Icon = ({ height, width, img}) => <div
    style={{ width: width, height: height }}
    className="icon">
    <img src={img} />
</div>

Icon.defaultProps = {
    width: "30vw",
    height: "30vh",
    img: defaultImg,
}

export default Icon;