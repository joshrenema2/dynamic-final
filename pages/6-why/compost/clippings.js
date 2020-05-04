import React from "react";
import "../why.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const clippings = require("../../../img/clippings.png");

const Clippings = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Clippings - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={clippings} />
              <Caption text="Grass clippings are a great additive to the compost mix because they provide all the right nutrients for plant growth! " />
              <div className="button_nav">
                <Link href="/4-sub-options/compost">
                  <Button
                    text="Back to Compost"
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

export default Clippings;
