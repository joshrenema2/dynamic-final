import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const boots = require("../../../img/boots.png");

const Boots = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Rubber Boots - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={boots} />
              <Caption text="Rubber boots are sturdy, and once you grow out of your pair is it important to donate them to someone less fortunate! " />
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

export default Boots;
