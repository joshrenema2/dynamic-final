import React from "react";
import "./sub-options.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";
import Link from "next/link";

const milk = require("../../img/milk.png");
const cardboard = require("../../img/box.png");
const egg = require("../../img/egg.png");

const Recycle = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                                <Title text="Choose a Recycle Type" />
                                <div className="organic_option_parent">

                                    <div className="organic_option_child">
                                        <Icon img={milk} />
                                        <Link href="/5-how/recycle/milk"><Button text="Milk Jugs" /></Link>
                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={cardboard} />
                                        <Link href="/5-how/recycle/box"><Button text="Cardboard Boxes" width="170px" /></Link>

                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={egg} />
                                        <Link href="/5-how/recycle/egg"><Button text="Egg Cartons" /></Link>

                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
}

export default Recycle;