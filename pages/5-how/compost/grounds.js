import React from "react";
import "../pagefive.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const grounds = require("../../../img/grounds.png");

const Grounds = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Grounds - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={grounds} />
              <Caption
                text="Coffee grounds can be discarded into the Green bin after use, or put 
                directly onto soil that is being used to grow plants. "
              />
              <Link href="/6-why/compost/grounds">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grounds;
