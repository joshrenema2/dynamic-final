import React from "react";
import "./pagefive.css";
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";
import Link from "next/link";

const banana = require("../../img/banana.png");


const PageFive = () => {
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
            <div className="organic_option_info info">
              this is some sample text where actual important info would go and
              not just gibberish of i don't know what i am talking about hehe xD
            </div>
            <Link href="/page_6"><Button text="Next" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
