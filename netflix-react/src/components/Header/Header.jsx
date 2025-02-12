import React, { useEffect, useState } from "react";
import "./Header.css";
import Netflixlogo from "../../assets/image/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Import hamburger icon

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`header-container ${show ? "header_black" : ""}`}>
        <div className="header-left">
          <ul>
            <li>
              <img
                className="Netflixlogo"
                src={Netflixlogo}
                alt="netflix logo"
                width={100}
              />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TVShows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Latests</a>
            </li>
            <li>
              <a href="#">MyLists</a>
            </li>
            <li>
              <a href="#">Browse by Languages</a>
            </li>
          </ul>
        </div>

        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <img
                className="avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Avatar"
                width="30"
                height="30"
              />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
         
        </div>
      </div>
    </>
  );
};

export default Header;
