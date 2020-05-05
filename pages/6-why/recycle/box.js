import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const box = require("../../../img/box.png");

const Box = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Cardboard Boxes - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={box} />
              <Caption text="Cardboard boxes are made of a very valuable material, which can be recycled and reused in multiple ways. " />
              <div className="button_nav">
                <Link href="/4-sub-options/recycle">
                  <Button
                    text="Back to Recycle"
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

export default Box;
