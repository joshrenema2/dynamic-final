import React from "react";
import "./pageone.css"
import Button from "../../comps/button";
import Icon from "../../comps/icons";
import Header from "../../comps/header";
import Link from "next/link";

const dark_logo = require("../../img/logo_dark_green.png");
const PageOne = () => {

    return <div>
        <div><Header /></div>
        <div className="outer_box">
            <div className="content">
                <Icon img={dark_logo} />
                <Link href="/page_2"><Button text="Start" width="75px" /></Link>
            </div>
        </div>
    </div>
}

export default PageOne;
