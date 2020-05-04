import React from "react";
import "../pagefive.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const tv = require("../../../img/tv.png");

const OldTv = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Old TV - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={tv} />
              <Caption
                text="TV’s can be dropped off at your local Recycling depot. If the TV is in working condition, consider donating it to a charity! 
                "
              />
              <Link href="/6-why/compost/tv">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldTv;
