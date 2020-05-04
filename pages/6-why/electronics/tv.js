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
          <Title text="Old TV - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={tv} />
              <Caption text="Grass tv are a great additive to the compost mix because they provide all the right nutrients for plant growth! " />
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

export default Oldtv;
