import "./styles.css";
import SearchIcon from "../../../assets/img/icon/search.png";
import HeartIcon from "../../../assets/img/icon/heart.png";
import CartIcon from "../../../assets/img/icon/cart.png";
import AppLogo from "../../../assets/img/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="header__top__left">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="header__top__right">
                <div className="header__top__links">
                  <a href="#">Sign in</a>
                  <a href="#">FAQs</a>
                </div>
                <div className="header__top__hover">
                  <span>
                    Usd <i className="arrow_carrot-down" />
                  </span>
                  <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>USD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <a href="./index.html">
                <img src={AppLogo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
              <ul>
                <li>
                  <a href="./index.html">Home</a>
                </li>
                <li>
                  <a href="./shop.html">Shop</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="dropdown">
                    <li>
                      <a href="./about.html">About Us</a>
                    </li>
                    <li>
                      <a href="./shop-details.html">Shop Details</a>
                    </li>
                    <li>
                      <a href="./shopping-cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="./checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="active">
                  <a href="./blog.html">Blog</a>
                </li>
                <li>
                  <a href="./contact.html">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
              <a href="#" className="search-switch">
                <img src={SearchIcon} alt="" />
              </a>
              <a href="#">
                <img src={HeartIcon} alt="" />
              </a>
              <a href="#">
                <img src={CartIcon} alt="" /> <span>0</span>
              </a>
              <div className="price">$0.00</div>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <i className="fa fa-bars" />
        </div>
      </div>
    </header>
  );
}

export default Header;
