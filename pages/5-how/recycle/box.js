import React from "react";
import "../how.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const box = require("../../../img/box.png");

const Box = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Cardboard Boxes - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={box} />
              <Caption
                text="Cardboard boxes can be flattened and placed into your Yellow bag. 
                "
              />
              <Link href="/6-why/recycle/box">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
