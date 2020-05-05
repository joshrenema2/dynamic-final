import React from "react";
import "../how.css";
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
          <Title text="Plastic Bag - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={plastic} />
              <Caption
                text="Plastic bags can be stored in your home, and dropped off to a Recycling depot in bulk.  
                "
              />
              <Link href="/6-why/trash/plasticbag">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plastic;
