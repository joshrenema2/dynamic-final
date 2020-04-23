import React from "react";
import "./pagesix.css";
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";
import Link from "next/link";

const banana = require("../../img/banana.png");


const PageSix = () => {
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
            <div className="organic_option_child info">
              this is some sample text where actual important info would go and
              not just gibberish of i don't know what i am talking about hehe xD
            </div>
            <div className="button_nav">   
            <Link href="/page_4"><Button text="Back to Compost" width="150px" className="button"/></Link>
            <Link href="/page_1"><Button text="Home" width="150px" className="button"/></Link>
            <Link href="/page_3"><Button text="Back to Waste Types" className="button"/></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSix;
