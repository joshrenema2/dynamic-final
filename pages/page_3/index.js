import React from "react";
import "./pagethree.css"
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
                                        <Link href="/page_4"><Button text="Compost" /></Link>
                                    </div>

                                    <div className="waste_options_child">
                                        <Icon img={trash} />
                                        <Button text="Trash" />
                                    </div>

                                    <div className="waste_options_child">
                                        <Icon img={recycle} />
                                        <Button text="Recycle" />
                                    </div>

                                    <div className="waste_options_child">
                                        <Icon img={electronics} />
                                        <Button text="Electronics" />
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
}

export default PageThree;