import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const egg = require("../../../img/egg.png");

const Egg = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Egg Cartons- Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={egg} />
              <Caption text="Egg cartons are made of styrofoam, which is harmful to the environment. It is important to dispose of them recycling, so they don’t end up in our landfills. " />
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

export default Egg;
