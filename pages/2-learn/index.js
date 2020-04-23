import React from "react";
import "./learn.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Caption from "../../comps/caption";
import Icon from "../../comps/icons";
import Header from "../../comps/header";
import Link from "next/link";


const PageTwo = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                        <Title text="Learn" />
                        <Icon />
                        <Caption text="The goal of this app is to teach about the importance of recycling, and the impact it can have on our world. We hope to help educate you by clicking throughout our app and learning the proper way to dispose your waste products :)" />
                        <Link href="/3-waste-options"><Button text="Next" width="75px" /></Link>
                    </div>
                </div>
            </div>
}

export default PageTwo;