import React from "react";
import "./icons.css";

const Icon = ({ height, width, img}) => <div
    style={{ width: width, height: height }}
    className="icon">
        <img src={img} />
</div>

Icon.defaultProps = {
    width: "15vw",
    height: "15vh",
}

export default Icon;