import React from "react";
import "../pagefive.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const battery = require("../../../img/battery.png");

const Battery = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Battery - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={battery} />
              <Caption
                text="Household batteries can be dropped off at your local recycling depot for disposal. 
                "
              />
              <Link href="/6-why/electronics/battery">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battery;
