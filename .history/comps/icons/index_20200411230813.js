import React from "react";
import "./icons.css";

const defaultImg = require("../../img/banana.png.png");

const Icon = ({ height, width, img}) => <div
    style={{ width: width, height: height }}
    className="icon">
        <img src={defaultImg} />
</div>

Icon.defaultProps = {
    width: "20vw",
    height: "20vh",
    img: defaultImg,
}

export default Icon;