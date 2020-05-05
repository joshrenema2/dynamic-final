import React from "react";
import "../how.css";
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
          <Title text="Lightbulb - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={lightbulb} />
              <Caption
                text="Incandescent light bulbs can be tossed into the waste bin. If the glass is broken, you can wrap it in paper before disposal.  Fluorescent light bulbs contain amounts of Mercury, a dangerous chemical. These lightbulbs can be dropped off at your local Recycling depot.  
                "
              />
              <Link href="/6-why/electronics/lightbulb">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbulb;
