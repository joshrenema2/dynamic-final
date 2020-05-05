import React from "react";
import "../how.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const banana = require("../../../img/banana.png");

const Banana = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_box">
        <div className="content">
          <Title text="Bananas - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={banana} />
              <Caption text="Bananas are good to go straight into your Green bin after consumption!" />
              <Link href="/6-why/compost/banana">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banana;
