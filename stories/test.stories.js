import React from "react";
import Button from "../comps/button";
import Icon from "../comps/icons";
import Title from "../comps/title";
import Caption from "../comps/caption";
import Home from "../pages/1-home";
import Learn from "../pages/2-learn";
import WasteOptions from "../pages/3-waste-options";
import SubOptions from "../pages/4-sub-options/compost";
import How from "../pages/5-how/compost/banana";
import Why from "../pages/6-why/compost/banana";
import Header from "../comps/header";
import Menu from "../comps/menu"; 

export default {
    title: "Recycle Toss",
};

export const MyButton = () => <Button />;

export const MyIcon = () => <Icon />;

export const MyTitle = () => <Title />;

export const MyCaption = () => <Caption />;

export const MyHome = () => <Home />;

export const MyLearn = () => <Learn />;

export const MyWasteOptions = () => <WasteOptions />;

export const MySubOptions = () => <SubOptions />;

export const MyHow = () => <How />;

export const MyWhy = () => <Why />;

export const MainHeader = () => <Header />; 

export const HamburgerMenu = () => <Menu />; 
