import React from "react";
import Button from "../../comps/button";
import Icon from "../../comps/icons";

const dark_logo = require("../../img/logo_dark_green.png");
const PageOne = () => {

    return <div>
<Icon img={dark_logo} />
<img src={require("../../img/logo_dark_green.png")} />
<Button text="Start "/>
    </div>
}

export default PageOne;
