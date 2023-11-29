import "./styles.scss";
import { spotify } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../../store/slices/user";
const Login = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginUser = async (e) => {
    e.preventDefault();
    const { password, username } = userDetails;
    let userInfo = JSON.stringify({
      password,
      username,
    });
    const res = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userInfo,
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      localStorage.setItem("loggedUser", data.token);
      dispatch(loggedUser(data));
      navigate("/");
    } else {
      toast.error(data.message);
    }
  };
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    //Avoid double logging
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <header>
        <div>
          <img src={spotify} alt="logo spotify" />
        </div>
      </header>
      <div className="container tertiary_bg">
        <div className="login dark">
          <h1>Log in to Spotify</h1>
          <div className="borderLine"></div>

          <form onSubmit={loginUser}>
            <div className="login__inputs">
              <label htmlFor="username">Email or username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={userDetails.username}
                onChange={onChange}
                placeholder="Email or username"
              />
            </div>
            <div className="login__inputs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userDetails.password}
                onChange={onChange}
                placeholder="Your password"
              />
            </div>
            <div className="login__inputs">
              <input className="submitBtn" type="submit" value="Log in" />
            </div>
          </form>
          <div className="borderLine2"></div>
          <p className="createAccount">
            <span>Don't have an account?</span>
            <Link to="/signup">Sign up for Spotify</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
