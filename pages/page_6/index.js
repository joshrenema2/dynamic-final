import React from "react";
import "./pagesix.css";
import Button from "../../comps/button";
import Title from "../../comps/title";
import Icon from "../../comps/icons";
import Caption from "../../comps/caption";
import Header from "../../comps/header";

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
              <Button text="Back to Compost"  className="button" />
              <Button text="Back to Start" className="button"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSix;
