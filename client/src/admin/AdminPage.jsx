import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import CreateLaptop from "./createProduct/CreateLaptop";
import ListProduct from "./listProduct/ListProduct";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Account } from "../Context/UserContext";
import Create from "./createProduct/Create";
const AdminPage = () => {
  const [select, setSelect] = useState({ proceed: "", product: "" });
  const [isSelect, setIsSelect] = useState(false);
  const { checkAccount, setCheckAccount } = useContext(Account);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSelect({ ...select, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setIsSelect(true);
  };

  return (
    <div className="body">
      <div className="mt-2 d-flex justify-content-between">
        <div>
          <Form.Select
            aria-label="Default select example"
            name="proceed"
            value={select.proceed}
            onChange={onChange}
            className="mr-2"
          >
            <option>Chọn hoạt động cần làm</option>
            <option value="create">Create</option>
            <option value="delete">Delete</option>
            <option value="fix">Fix</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            name="product"
            value={select.product}
            onChange={onChange}
            className="mr-2"
          >
            <option>Chọn sản phẩm</option>
            <option value="laptop">Laptop</option>
          </Form.Select>
          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </div>
        {checkAccount.isAuth && (
          <div className="navbar__icon--user mt-3">
            <img
              src={checkAccount.user.avatar}
              alt="#"
              className="navbar__user--img"
            />
            <ul className="arrow-up">
              <li>
                {checkAccount.user.firstName + " " + checkAccount.user.lastName}
              </li>
              <li>
                <Link to="/login">Thông tin tài khoản</Link>
              </li>
              <li>
                <div
                  onClick={() => {
                    setCheckAccount({ isAuth: false, user: null });
                    navigate("/login");
                  }}
                >
                  Đăng xuất
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      {select.proceed === "create" && isSelect && (
        <Create selectProp={select} />
      )}
      {(select.proceed === "delete" && isSelect && (
        <ListProduct selectProp={select} />
      )) ||
        (select.proceed === "fix" && isSelect && (
          <ListProduct selectProp={select} />
        ))}
    </div>
  );
};

export default AdminPage;
