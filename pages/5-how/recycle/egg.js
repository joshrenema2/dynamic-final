import React from "react";
import "../pagefive.css";
import Button from "../../../comps/button";
import Title from "../../../comps/title";
import Icon from "../../../comps/icons";
import Caption from "../../../comps/caption";
import Header from "../../../comps/header";
import Link from "next/link";

const egg = require("../../../img/egg.png");

const Egg = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="outer_egg">
        <div className="content">
          <Title text="Egg Carton - How" />
          <div className="organic_option_parent">
            <div className="organic_option_child">
              <Icon img={egg} />
              <Caption
                text="Egg cartons can be saved and dropped off at your local recycling depot for free.
                "
              />
              <Link href="/6-why/recycle/egg">
                <Button text="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Egg;
