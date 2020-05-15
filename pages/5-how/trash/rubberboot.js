import React from "react";
import "../how.css";
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
          <Title text="Rubber Boots - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={boots} />
              <Caption
                text="You can drop off your old rain boots at your local donation bin."
              />
              <Link href="/6-why/trash/rubberboot">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boots;
