import React from "react";
import "./user.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Account } from "../../../../Context/UserContext";

const User = () => {
  const { checkAccount, confirmLogout } = useContext(Account);
  const handleLogout = () => {
    confirmLogout();
  };
  return (
    <>
      {!checkAccount.isAuth ? (
        <div className="navbar__icon--user">
          <img
            src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/349499051_782785400095964_5917551194470912748_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=iluCyTqwJt4AX-mW6GZ&_nc_ht=scontent.fhan15-2.fna&oh=03_AdSwWFpBtbiuHYiB9pLiupQsBPlAV20VMUmLxXdBFM7UYQ&oe=64971BB7"
            alt=""
          />
          <ul className="arrow-up">
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link to="/register">Đăng ký</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar__icon--user">
          <img
            src={checkAccount.user.avatar}
            alt="#"
            className="navbar__user--img"
          />
          <ul className="arrow-up">
            <li>
              {checkAccount.user.firstName + " " + checkAccount.user.lastName}
            </li>
            {checkAccount.user.admin && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li>
              <Link to="/login">Thông tin tài khoản</Link>
            </li>
            <li>
              <div onClick={handleLogout}>Đăng xuất</div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default User;
