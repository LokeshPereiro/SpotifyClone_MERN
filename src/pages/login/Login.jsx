import "./styles.scss";
import { spotify } from "../../constants";
import { Link } from "react-router-dom";
const Login = () => {
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

          <form>
            <div className="login__inputs">
              <label htmlFor="email">Email or username</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email or username"
              />
            </div>
            <div className="login__inputs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
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
