import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const plastic = require("../../../img/plastic.png");

const Plastic = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Plastic Bag - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={plastic} />
              <Caption text="It is important to recycle and repurpose plastic bags as it is harmful to the environment. It is made of a material that cannot organically decompose, so it stays on the earth for years! " />
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

export default Plastic;
