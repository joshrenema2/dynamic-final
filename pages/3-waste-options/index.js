import React from "react";
import "./waste-options.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";
import Link from "next/link";

const compost = require("../../img/compost.png");
const trash = require("../../img/trash.png");
const recycle = require("../../img/recycle.png");
const electronics = require("../../img/electronics.png");

const PageThree = () => {

    return <div>
                <div><Header /></div>
                <div className="outer_box">
                    <div className="content">
                                <Title text="Choose a Waste Type" />
                                <div className="waste_options_parent">

                                    <div className="waste_options_child">
                                        <Icon img={compost} />
                                        <Link href="/4-sub-options/compost"><Button text="Compost" /></Link>
                                    </div>

                                    <div className="waste_options_child">
                                        <Icon img={trash} />
                                        <Link href="/4-sub-options/trash"><Button text="Trash" /></Link>
                                    </div>

                                    <div className="waste_options_child">
                                        <Icon img={recycle} />
                                        <Link href="/4-sub-options/recycle"><Button text="Recycle" /></Link>
                                    </div>

                                    <div className="waste_options_child">
                                        <Icon img={electronics} />
                                        <Link href="/4-sub-options/electronics"><Button text="Electronics" /></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
}

export default PageThree;