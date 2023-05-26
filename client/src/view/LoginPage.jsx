import React from "react";
import { Link } from "react-router-dom";
import Login from "../component/header/navbar/user/login/Login";

const LoginPage = () => {
  return (
    <div className="body">
      <div className="d-flex mt-5 justify-content-between">
        <div>
          <Link to="/">
            <img
              src="https://cdn.tgdd.vn/Files/2018/11/27/1134121/bannerlaptopthang12_800x450-600x400.png"
              alt=""
              className="ml-5 w-75 rounded"
            />
          </Link>
          <h3 className="ml-5 w-75">
            Nơi khách hàng gửi gắn niềm tin và nơi bán hàng uy tín và chất lượng
          </h3>
        </div>
        <div className="mr-5 mt-5">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
