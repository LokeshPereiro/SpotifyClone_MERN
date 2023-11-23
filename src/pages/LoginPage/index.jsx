import { Link } from "react-router-dom";
import TextField from "../../components/inputs-components/Inputs/TextField";
import Checkbox from "../../components/inputs-components/Inputs/Checkbox";
import Button from "../../components/inputs-components/Button";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
// import styles from "./styles.module.scss";
import "./styles.scss";

const Login = () => {
  return (
    <div className="container">
      <div className="logo_container">
        <Link to="/">
          <img alt="logo" />
        </Link>
      </div>
      <main className="main">
        <h1 className="heading">To continue, log in to Spotify.</h1>
        <button className="contained_btn" style={{ background: "#3b5998" }}>
          <FacebookRoundedIcon /> continue with facebook
        </button>
        <button className="contained_btn" style={{ background: "#000" }}>
          <AppleIcon /> continue with apple
        </button>
        <button className="outline_btn">
          <GoogleIcon /> continue with google
        </button>
        <button className="outline_btn">Continue with phone number</button>
        <p className="or_container">or</p>
        <form className="form_container">
          <div className="input_container">
            <TextField
              label="Enter your email"
              placeholder="Enter your email"
              name="email"
              required={true}
            />
          </div>
          <div className="input_container">
            <TextField
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>
          <p className="forgot_password">Forgot your password?</p>
          <div className="form_bottom">
            <Checkbox label="Remember me" />
            <Button
              type="submit"
              label="LOG IN"
              style={{ color: "white", background: "#15883e", width: "20rem" }}
            />
          </div>
        </form>
        <h1 className="dont_have_account">Don't have an account?</h1>
        <Link to="/signup">
          <button className="outline_btn">sign up for spotify</button>
        </Link>
      </main>
    </div>
  );
};

export default Login;
