import React from "react";
import "./pageone.css"
import Button from "../../comps/button";
import Icon from "../../comps/icons";


const dark_logo = require("../img/logo_dark_green.png");
const PageOne = () => {

    return <div>
<Icon img={dark_logo} />
<Button text="Start "/>
    </div>
}

export default PageOne;
