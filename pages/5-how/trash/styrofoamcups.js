import React from "react";
import "../how.css";
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
          <Title text="Styrofoam Cups - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={cup} />
              <Caption
                text="Styrofoam cups can be saved up in your home, and dropped off at a local recycling depot."
              />
              <Link href="/6-why/trash/styrofoamcups">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cup;
