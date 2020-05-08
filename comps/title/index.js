import React from "react";
import "./title.css";

const Title = ({ text }) => <div className="title_container"><div
    className="title">
    {text}
</div>
</div>

Title.defaultProps = {
    text: "Header"
}

export default Title;