import React from "react";
import "./sub-options.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";
import Link from "next/link";

const banana = require("../../img/banana.png");
const grounds = require("../../img/grounds.png");
const clippings = require("../../img/clippings.png");

const Compost = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                                <Title text="Choose an Organic Type" />
                                <div className="organic_option_parent">

                                    <div className="organic_option_child">
                                        <Icon img={banana} />
                                        <Link href="/5-how/compost/banana"><Button text="banana" /></Link>
                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={grounds} />
                                        <Link href="/5-how/compost/grounds"><Button text="coffee grounds" /></Link>

                                    </div>

                                    <div className="organic_option_child">
                                        <Icon img={clippings} />
                                        <Link href="/5-how/compost/clippings"><Button text="clippings" /></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
}

export default Compost;