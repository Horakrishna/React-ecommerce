import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src="https://image.shutterstock.com/image-photo/kiev-ukraine-may-07-2015-260nw-276929006.jpg" 
            alt="header__logo" />
            <div className="header__search">
                <input className="search_input" type="text"/>
            </div>
            <div className="nav__bar">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guerst </span>
                    <span className="header__optionLineTwo">SignIn</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Return </span>
                    <span className="header__optionLineTwo">Order</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Cart</span>
                    <span className="header__optionLineTwo">SignIn</span>
                </div>
                
            </div>
        </div>
    )
}

export default Header
