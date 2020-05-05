import React from "react";
import "./importance.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Caption from "../../comps/caption";
import Icon from "../../comps/icons";
import Header from "../../comps/header";
import Link from "next/link";

const compost = require("../../img/compost.png");

const PageTwo = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                        <Title text="Importance" />
                        <Icon img={compost}/>
                        <Caption text="Disposing of all kinds of wastes properly is very important as waste has a huge negative impact on the natural environment. Harmful chemicals and greenhouse gasses are released from rubbish in landfill sites. Proper disposal of all kinds of waste helps to reduce the pollution caused by improper sorting. Together we can make a change" />
                        <Link href="/1-home"><Button text="Home" width="75px" /></Link>
                    </div>
                </div>
            </div>
}

export default PageTwo;