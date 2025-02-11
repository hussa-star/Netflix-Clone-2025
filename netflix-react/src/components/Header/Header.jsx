import React from "react";
import "./Header.css";
import Netflixlogo from "../../assets/image/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <div>
              <img
                className="Netflixlogo"
                src={Netflixlogo}
                alt="netflix logo"
                width={100}
              />
            </div>

            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latests</li>
            <li>MyLists</li>
            <li>Browse by Languages</li>
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
            <div>
              <img
                className="avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Avatar"
                width="30"
                height="30"
              />
            </div>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
