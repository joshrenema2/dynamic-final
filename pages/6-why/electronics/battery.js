import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const battery = require("../../../img/battery.png");

const Battery = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Batteries - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={battery} />
              <Caption text="When batteries decompose in landfills, the chemicals they are composed of can leak into the ground which can cause soil and water pollution!  " />
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

export default Battery;
