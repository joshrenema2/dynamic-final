import React from "react";
import "./sub-options.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";
import Link from "next/link";

const StyrofoamCups = require("../../img/cup.png");
const PlasticBag = require("../../img/plastic.png");
const RubberBoot = require("../../img/boots.png");

const Trash = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                                <Title text="Choose a Trash Type" />
                                <div className="organic_option_parent">

                                    <div className="organic_option_child">
                                        <Icon img={StyrofoamCups} />
                                        <Link href="/5-how/trash/styrofoamcups"><Button text="Styrofoam Cups" width="160px"/></Link>
                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={PlasticBag} />
                                        <Link href="/5-how/trash/plasticbag"><Button text="Plastic Bags" /></Link>
                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={RubberBoot} />
                                        <Link href="/5-how/trash/rubberboot"><Button text="Rubber Boots" /></Link>

                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
}

export default Trash;