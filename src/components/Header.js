import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src="https://ca-times.brightspotcdn.com/dims4/default/f496eee/2147483647/strip/true/crop/2048x1372+0+0/resize/840x563!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0f%2F9d%2Fc1f4bd48b0bd6ca861067eaf3477%2Fla-et-ct-amazon-sundance-manchester-by-the-sea-001" 
            alt="header__logo" />
            <div className="header__search">
                <input className="search_input" type="text"/>
                <SearchIcon className="header__searchIcon"/>
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
                <div className="header__optionBasket">
                    <ShoppingCartIcon className="header_shopping"/>
                    <span className="header__optionLineTwo header_shoppingBox">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
