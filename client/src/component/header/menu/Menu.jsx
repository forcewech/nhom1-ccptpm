import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu d-flex ">
      <li className="menu__list">
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Flaptop.png?alt=media&token=70473b5f-f5d3-4ddd-bda8-2b48ec355bca"
            alt=""
          />
          <span>LapTop</span>
        </Link>
        <ul className="menu__list--child">
          <li>Dell</li>
          <li>HP</li>
          <li>ASUS</li>
          <li>Nitro</li>
          <li>Macbook</li>
          <li>Các loại khác</li>
        </ul>
      </li>
      <li className="menu__list">
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fcomputer.png?alt=media&token=300e22e1-7f95-4430-86db-a87161ec1c47"
            alt=""
          />
          <span>PC</span>
        </Link>
        <ul className="menu__list--child">
          <li>Dell</li>
          <li>HP</li>
          <li>ASUS</li>
          <li>Nitro</li>
          <li>Macbook</li>
          <li>Các loại khác</li>
        </ul>
      </li>
      <li className="menu__list">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fnot-equal.png?alt=media&token=ab56156d-c67d-4295-b7a6-17a4968c7d0f"
          alt=""
        />
        <span>Khác</span>
      </li>
    </ul>
  );
};

export default Menu;
