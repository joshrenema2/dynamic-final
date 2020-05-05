import React from "react";
import "./sub-options.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";
import Link from "next/link";

const battery = require("../../img/battery.png");
const lightbulb = require("../../img/lightbulb.png");
const tv = require("../../img/tv.png");

const Electronics = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                                <Title text="Choose an Electronic Type" />
                                <div className="organic_option_parent">

                                    <div className="organic_option_child">
                                        <Icon img={battery} />
                                        <Link href="/5-how/electronics/battery"><Button text="Batteries" /></Link>
                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={lightbulb} />
                                        <Link href="/5-how/electronics/lightbulb"><Button text="Lightbulbs" /></Link>

                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={tv} />
                                        <Link href="/5-how/electronics/tv"><Button text="Old TV's" /></Link>

                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
}

export default Electronics;