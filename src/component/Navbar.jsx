import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate} from "react-router";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신행아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon className="login-icon" icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo.jpg"
          alt="logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input id="search-input" placeholder="제품검색" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
