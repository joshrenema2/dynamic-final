import React from "react";
import "./icons.css";

const Icon = ({ height, width, img}) => <div
    style={{ width: width, height: height }}
    className="icon">
        <img src={img} />
</div>

Icon.defaultProps = {
    width: "20vw",
    height: "20vh",
}

export default Icon;