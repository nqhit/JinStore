import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/ui/Button';

import logoFull from '@assets/images/logo-full.png';
import iconLocation from '@assets/icons/icon-location.svg';
import iconSearch from '@assets/icons/icon-search.svg';
import iconCart from '@assets/icons/icon-cart.svg';
import iconHeart from '@assets/icons/icon-heart.svg';
import iconUser from '@assets/icons/icon-user.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest('.header__account')) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  return (
    <Fragment>
      <header className="header">
        {/*         <section className="header__top">
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
        </section> */}
        <section className="header__main">
          <div className="header__main-content">
            <div className="header__logo">
              <Link to="/">
                <img src={logoFull} alt="JinStore" />
              </Link>
            </div>
            <div className="header__location">
              <img src={iconLocation} alt="local" />
              <span className="header__location-text">
                Deliver to
                <br />
                <strong>all</strong>
              </span>
            </div>
            <div className="header__search">
              <input type="text" placeholder="Search for products, categories or brands..." />
              <Button /* onClick={} */ className="header__search-button">
                <img src={iconSearch} alt="Search Button" />
              </Button>
            </div>
            <div className="header__icons">
              {/* Nút Account */}
              <div className="header__account">
                <Button onClick={() => setIsOpen(!isOpen)} className="header__account-btn">
                  <img src={iconUser} alt="Actor" />
                  <strong>Account</strong>
                </Button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="dropdown-menu">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      Create an Account
                    </Link>
                  </div>
                )}
              </div>
              <div className="header__wishlist">
                <i className="icon-heart"></i>
                <img src={iconHeart} alt="icon-heart" />
                <span className="header__count">0</span>
              </div>
              <div className="header__cart">
                <img src={iconCart} alt="icon-cart-shopping" />
                <span className="header__count">0</span>
              </div>
            </div>
          </div>
        </section>
        <nav className="header__nav">
          <div className="header__nav-content">
            <ul className="header__menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li /* className="dropdown" */>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">Fruits & Vegetables</Link>
              </li>
              <li>
                <Link to="/">Beverages</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
