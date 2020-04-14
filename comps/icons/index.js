import React from "react";
import "./icons.css";

const defaultImg = require("../../img/electronics.png");

const Icon = ({ height, width, img}) => <div
    style={{ width: width, height: height }}
    className="icon">
    <img src={img} />
</div>

Icon.defaultProps = {
    width: "auto",
    height: "30vh",
    img: defaultImg
}

export default Icon;