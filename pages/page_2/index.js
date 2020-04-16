import React from "react";
import Button from "../../comps/button";
import Title from "../../comps/title";
import Caption from "../../comps/caption";
import Icon from "../../comps/icons";
import Header from "../../comps/header";


const PageTwo = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                        <Title text="Learn" />
                        <Icon />
                        <Caption text="The goal of this app is to teach about the importance of recycling, and the impact it can have on our world. We hope to help educate you by clicking throughout our app and learning the proper way to dispose your waste products :)" />
                        <Button text="Next" width="75px" />
                    </div>
                </div>
            </div>
}

export default PageTwo;