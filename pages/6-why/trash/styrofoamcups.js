import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const cup = require("../../../img/cup.png");

const Cup = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Styrofoam Cups - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={cup} />
              <Caption text="Styrofoam is made of a material that is harmful to the environment, and very difficult to repurpose or recycle. It is essential that you drop it off at a local Recycling depot. " />
              <div className="button_nav">
                <Link href="/4-sub-options/trash">
                  <Button
                    text="Back to Trash"
                    width="150px"
                    className="button"
                  />
                </Link>
                <Link href="/1-home">
                  <Button text="Home" width="150px" className="button" />
                </Link>
                <Link href="/3-waste-options">
                  <Button text="Waste Types" className="button" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cup;
