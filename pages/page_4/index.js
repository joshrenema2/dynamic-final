import React from "react";
import "./pagefour.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";

const banana = require("../../img/banana.png");
const grounds = require("../../img/grounds.png");
const clippings = require("../../img/clippings.png");

const PageFour = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                                <Title text="Choose a Organic Type" />
                                <div className="organic_option_parent">

                                    <div className="organic_option_child">
                                        <Icon img={banana} />
                                        <Button text="banana" />
                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={grounds} />
                                        <Button text="grounds" />
                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={clippings} />
                                        <Button text="clippings" />
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
}

export default PageFour;