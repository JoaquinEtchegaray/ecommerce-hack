import React from "react";
import "../css/main.css"
import "../css/util.css"

function Navbar() {
  return (
    <div>
      <header className="header-v2">
        <div className="container-menu-desktop trans-03">
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop">
              {/* Logo desktop */}
              <a href="#" className="logo">
                <img src="images/icons/logo-01.png" alt="IMG-LOGO"></img>
              </a>
              {/* Menu Desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="product.html">Shop</a>
                  </li>
                  <li className="label1" data-label1="hot">
                    <a href="shoping-cart.html">Features</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>

                  <li>
                    <a href="about.html">About</a>
                  </li>

                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Icon Header */}
          <div className="wrap-icon-header flex-w flex-r-m h-full">
            <div className="flex-c-m h-full p-r-24">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                <i className="zmdi zmdi-search"></i>
              </div>
            </div>
            <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-sidebar">
                <i className="zmdi zmdi-menu"></i>
              </div>
            </div>
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo mobile */}
          <div className="logo-mobile">
            <a href="index.html">
              <img src="images/icons/logo-01.png" alt="IMG-LOGO"></img>
            </a>
          </div>
          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m h-full m-r-15">
            <div className="flex-c-m h-full p-r-10">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                <i className="zmdi zmdi-search"></i>
              </div>
            </div>
            <div className="flex-c-m h-full p-lr-10 bor5">
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                data-notify="2"
              >
                <i className="zmdi zmdi-shopping-cart"></i>
              </div>
            </div>
          </div>
          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
          {/* Menu Mobile */}
          <div className="menu-mobile">
            <ul className="main-menu-m">
              <li>
                <a href="index.html">Home</a>
              </li>

              <li>
                <a href="product.html">Shop</a>
              </li>

              <li>
                <a
                  href="shoping-cart.html"
                  className="label1 rs1"
                  data-label1="hot"
                >
                  Features
                </a>
              </li>

              <li>
                <a href="blog.html">Blog</a>
              </li>

              <li>
                <a href="about.html">About</a>
              </li>

              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;