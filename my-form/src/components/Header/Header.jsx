import React from 'react'
import styles from '../Header/Header.css'
import logo_main from '../Header/logo_main.svg';
import user from '../Header/user.svg';
import heart from '../Header/heart.svg';
import loop from '../Header/loop.svg';
import shoppingcart from '../Header/shopping-cart.svg';





function Header() {
  return (
      
      <header className="header">
          <div className="logo">
              <img src={logo_main} alt="Logo"/>
      </div>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="user-icons">
              <img src={user} alt="User Image" />
              <img src={loop} alt="loop" />
              <img src={heart} alt="like" />
              <img src={shoppingcart} alt="shopping cart" />
              

      </div>
    </header>  

  )
}

export default Header

