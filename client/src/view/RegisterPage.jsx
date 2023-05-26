import React from "react";
import { Link } from "react-router-dom";
import Register from "../component/header/navbar/user/register/Register";

const RegisterPage = () => {
  return (
    <div className="body">
      <div className="d-flex mt-5">
        <div>
          <Link to="/">
            <img
              src="https://cdn.tgdd.vn/Files/2018/11/27/1134121/bannerlaptopthang12_800x450-600x400.png"
              alt=""
              className="ml-5 mr-5 w-100"
            />
          </Link>
          <h2 className="ml-5 w-75">Đăng ký</h2>
        </div>
        <div className="mr-5 ml-5 p-5">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
