import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logotext from '@assets/icons/logotext.png';
import local from '@assets/icons/local.svg';
import SearchButton from '@assets/icons/SearchButton.svg';
import cartshopping from '@assets/icons/cartshopping.svg';
import iconheart from '@assets/icons/icon-heart.svg';
import actor from '@assets/icons/actor.svg';

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <section className="header__top">
          <div className="header__top-content">
            <div className="header__top-left">
              <a className="header__top-item__link" href="#">
                About Us
              </a>
              <a className="header__top-item__link" href="#">
                My account
              </a>
              <a className="header__top-item__link" href="#">
                Wishlist
              </a>
              <span className="header__delivery-time">
                We deliver to you every day from
                <span className="highlight">7:00 to 23:00</span>
              </span>
            </div>
            <div className="header__top-right">
              <span className="header__language">English</span>
              <span className="header__currency">USD</span>
              <a href="#">Order Tracking</a>
            </div>
          </div>
        </section>
        <section className="header__main">
          <div className="header__main-content">
            <div className="header__logo">
              <Link to="/">
                <img src={logotext} alt="JinStore" />
              </Link>
            </div>
            <div className="header__location">
              <img src={local} alt="local" />
              <span className="header__location-text">
                Deliver to
                <br />
                <strong>all</strong>
              </span>
            </div>
            <div className="header__search">
              <input type="text" placeholder="Search for products, categories or brands..." />
              <button className="header__search-button">
                <img src={SearchButton} alt="Search Button" />
              </button>
            </div>
            <div className="header__icons">
              <div className="header__account">
                <img src={actor} alt="Actor" />
                <Link to="/login">
                  <p>
                    Sign In <br />
                  </p>
                  <strong>Account</strong>
                </Link>
              </div>
              <div className="header__wishlist">
                <i className="icon-heart"></i>
                <img src={iconheart} alt="icon-heart" />
                <span className="header__count">0</span>
              </div>
              <div className="header__cart">
                <img src={cartshopping} alt="icon-cart-shopping" />
                <span className="header__count">0</span>
              </div>
            </div>
          </div>
        </section>
        <nav className="header__nav">
          <div className="header__nav-content">
            <ul className="header__menu">
              <li>
                <a>
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="dropdown">
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Fruits & Vegetables</a>
              </li>
              <li>
                <a href="#">Beverages</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
