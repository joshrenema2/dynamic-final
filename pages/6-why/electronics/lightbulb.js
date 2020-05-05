import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const lightbulb = require("../../../img/lightbulb.png");

const Lightbulb = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Lightbulb - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={lightbulb} />
              <Caption text="Much like batteries, fluorescent light bulbs contain chemicals that, when leaked into the ground, can cause pollution. " />
              <div className="button_nav">
                <Link href="/4-sub-options/electronics">
                  <Button
                    text="Back to Electronics"
                    width="150px"
                    className="button"
                  />
                </Link>
                <Link href="/1-home">
                  <Button text="Home" width="150px" className="button" />
                </Link>
                <Link href="/3-waste-options">
                  <Button text="Back to Waste Types" className="button" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbulb;
