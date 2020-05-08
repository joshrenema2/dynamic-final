import React from "react";
import "./header.css"
import Link from "next/link";

const defaultimg = require('../../img/logo_light_green.png')
const accountimg = require('../../img/account.png')
const menuimg = require('../../img/menu-icon.png')

const Header = () => <div className="main_header">
    <div><img src={menuimg} className="hamburger_menu" />
    </div>
    <div className="leftflex">
        <Link href="../../1-home"><img src={defaultimg} className="logo" /></Link>
        <div className="line"></div>
        <div className="main_header_box">
            <Link href="../../2-learn"><p className="click">LEARN</p></Link>
            <Link href="../../7-importance"><p className="click">IMPORTANCE</p></Link>
            <Link href="../../3-waste-options"><p className="click">WASTE TYPES</p></Link>
        </div>
    </div>

    <div className="rightflex">
        <img src={accountimg} className="accountimage" />
        <p className="name">TestUser</p>
    </div>
</div>

export default Header; 