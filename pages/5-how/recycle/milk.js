import React from "react";
import "../pagefive.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const milk = require("../../../img/milk.png");

const Milk = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Milk Jugs - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={milk} />
              <Caption
                text="Milk jugs can go into your Blue box as per your curbside recycling program.
                "
              />
              <Link href="/6-why/compost/milk">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milk;
