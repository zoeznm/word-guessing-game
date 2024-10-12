import React from "react";
import "./contact.css"; // CSS 파일 추가
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/"); // 홈 버튼 클릭 시 메인 페이지로 이동
  };
  return (
    <div className="container">
      <>
        <h2>Contact</h2>
        <div className="contact-container">
          <p>제가 궁금하시다면? 아래로 연락주세요 😗</p>
          <p className="click gmail">
            <a href="mailto:madlife1292@gmail.com">Gmail</a>
          </p>
          <p className="click github">
            <a
              href="https://github.com/zoeznm"
              target="_blank"
              rel="noopener noreferrer"
            >
              zoeznm
            </a>
          </p>
          <p className="click instagram">
            <a
              href="https://instagram.com/matomabo"
              target="_blank"
              rel="noopener noreferrer"
            >
              @matomabo
            </a>
          </p>
        </div>
        <button onClick={handleHome} className="home">
          Home
        </button>
      </>
    </div>
  );
};

export default Contact;
