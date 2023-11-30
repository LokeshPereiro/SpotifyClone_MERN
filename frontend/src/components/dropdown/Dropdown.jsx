import React from "react";
import { FaUser } from "react-icons/fa";
import "./styles.scss";
import { loggedOutUser } from "../../store/slices/user";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Dropdown = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(loggedOutUser());
    localStorage.removeItem("loggedUser");
  };
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle userIcon__btn"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaUser />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <Link to="/account" className="dropdown-item" href="#">
            Account{" "}
            <span>
              <FaExternalLinkAlt />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="dropdown-item" href="#">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/profile" className="dropdown-item" href="#">
            Upgrade to Premium{" "}
            <span>
              <FaExternalLinkAlt />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="dropdown-item" href="#">
            Settings
          </Link>
        </li>
        <li onClick={handleLogOut}>
          <a className="dropdown-item logout" href="#">
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
