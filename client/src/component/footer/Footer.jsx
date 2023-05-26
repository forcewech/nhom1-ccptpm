import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer d-flex">
      <div className="w-75 ml-5 mt-4 mr-5 ">
        <div className=" note d-flex">
          <div className="footer__note">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Finsurance.png?alt=media&token=7fd73137-6991-4afc-9a81-7b75f28b8840"
              alt=""
            />
            <div className="footer__note--title">Chế độ bảo hành tận tâm</div>
            <div className="footer__note--text">
              Tất cả các sản phẩm do ThinkPro bán ra đều được tuân thủ điều kiện
              bảo hành của nhà cung cấp, hãng sản xuất. Nếu có vấn đề về chất
              lượng sản phẩm, ThinkPro xin cam kết sẽ hỗ trợ Quý khách tới cùng.
            </div>
          </div>
          <div className="footer__note">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Freturn-box.png?alt=media&token=25c1b11e-37ec-42cb-9d83-f80bfd7aafaa"
              alt=""
            />
            <div className="footer__note--title">
              Hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100%
            </div>
            <div className="footer__note--text">
              Với thời gian dùng thử lên tới 15 ngày, Quý khách sẽ được hỗ trợ
              đổi trả 1-1 hoặc hoàn tiền 100% nếu phát sinh lỗi hoặc cảm thấy
              sản phẩm chưa đáp ứng được nhu cầu.
            </div>
          </div>
        </div>
        <div className="footer__infor">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Finfo.png?alt=media&token=344fbd13-25c1-4606-b639-fdfa8a2d8b31"
            alt=""
          />
          <div className="footer__infor--title">Thông tin code</div>
          <div className="d-flex">
            <ul className="footer__infor--list">
              <li>
                <i className="fa-brands fa-git"></i>
                <a href="https://github.com/haiacoustic25/ShopMayTinh">
                https://github.com/forcewech/nhom1-ccptpm
                </a>
              </li>
              <li>
              <i className="fa-solid fa-building-columns"></i>
                Trường đại học Công Nghiệp Hà Nội
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1684652116510-8e65f0ea3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt=""
        className="flex-shrink-1 w-25 img-sub"
      />
    </div>
  );
};

export default Footer;
