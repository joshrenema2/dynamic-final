import React from "react";
import "./icons.css";

const avatarImg = require("../../img/logo_dark_green.png");
const Icon = ({ height, width, img}) => <div
    style={{ width: width, height: height }}
    className="icon">
        <img src={img} />
</div>

Icon.defaultProps = {
    width: "20vw",
    height: "15vh",
    img: avatarImg,
}

export default Icon;