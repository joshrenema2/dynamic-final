import React from "react";
import "./header.css"

const defaultimg = require('../../img/logo_light_green.png')
const accountimg = require('../../img/account.png')

const Header = () => <div className="main_header">
        <img src={defaultimg} className="logo"/>
            <div className="line"></div>
        <p className="click">LEARN</p>
        <p className="click">TUTORIAL</p>
        <p className="click">HIGH SCORES</p>
        <p className="click">IMPORTANCE OF RECYCLING</p>
        <p className="settings">SETTINGS</p>
        <div className="rightflex">
            <img src={accountimg} className="accountimage"/>
            <p className="name">Noobslayer</p>
        </div>
</div>

export default Header; 