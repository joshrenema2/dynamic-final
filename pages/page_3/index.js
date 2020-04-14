import React from "react";
import "./pagethree.css"
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";

const compost = require("../../img/compost.png");
const trash = require("../../img/trash.png");
const recycle = require("../../img/recycle.png");
const electronics = require("../../img/electronics.png");

const PageThree = () => {

    return <div className="outer_box">
        <div className="content">
                    <Title text="Choose a Waste Type" />
                    <div className="waste_options_parent">

                        <div className="waste_options_child">
                            <Icon img={compost} />
                            <Button text="Compost" />
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
}

export default PageThree;