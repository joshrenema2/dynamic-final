import React from "react";
import "../why.css";
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
          <Title text="Bananas - Why" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={banana} />
                <Caption text="this is some sample text where actual important info would go and
              not just gibberish of i don't know what i am talking about hehe xD" />
              <div className="button_nav">
                <Link href="/4-sub-options"><Button text="Back to Compost" width="150px" className="button" /></Link>
                <Link href="/1-home"><Button text="Home" width="150px" className="button" /></Link>
                <Link href="/3-waste-options"><Button text="Back to Waste Types" className="button" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banana;
