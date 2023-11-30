import React from "react";
import { FaUser } from "react-icons/fa";
import "./styles.scss";
import { loggedOutUser } from "../../store/slices/user";
import { useDispatch } from "react-redux";
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
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Setting
          </a>
        </li>
        <li onClick={handleLogOut}>
          <a className="dropdown-item logout" href="#">
            LogOut
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
