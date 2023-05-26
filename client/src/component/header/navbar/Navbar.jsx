import React from "react";
import Cart from "./cart/Cart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Notification from "./notification/Notification";
import User from "./user/User";

const Navbar = () => {
  return (
    <div className="header__navbar d-flex justify-content-between align-items-center">
      <Link to="/">
        <img
          src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/349499051_782785400095964_5917551194470912748_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=iluCyTqwJt4AX-mW6GZ&_nc_ht=scontent.fhan15-2.fna&oh=03_AdSwWFpBtbiuHYiB9pLiupQsBPlAV20VMUmLxXdBFM7UYQ&oe=64971BB7"
          alt=""
          className="navbar__img"
        />
      </Link>
      <div className="navbar__search d-flex">
        <div className="navbar__search--input">
          <input type="text" placeholder="Tìm kiếm..." />
          <div className="navbar__search--icon">
            <i className="fa-solid fa-magnifying-glass mr-2"></i>
          </div>
        </div>
      </div>
      <div className="navbar__icon d-flex">
        <div>
          <Cart />
        </div>
        <div>
          <Notification />
        </div>
        <div>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
