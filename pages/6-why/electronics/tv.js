import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const tv = require("../../../img/tv.png");

const Oldtv = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Old TV's - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={tv} />
              <Caption text="TV’s are made of components that contain valuable material. If they aren’t recycled properly, the chemicals they are made of can leak into the ground and cause water and soil pollution! " />
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

export default Oldtv;
