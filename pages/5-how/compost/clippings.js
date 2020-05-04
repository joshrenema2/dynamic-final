import React from "react";
import "../pagefive.css";
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
          <Title text="Clippings - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={clippings} />
              <Caption
                text="Grass clippings can be thrown into the green bin once mowed. "
              />
              <Link href="/6-why/compost/clippings">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clippings;
