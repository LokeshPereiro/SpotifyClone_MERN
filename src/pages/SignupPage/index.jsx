import { Link } from "react-router-dom";
import TextField from "../../components/inputs-components/Inputs/TextField";

import Select from "../../components/inputs-components/Inputs/Select";
import Radio from "../../components/inputs-components/Inputs/Radio";
import Checkbox from "../../components/inputs-components/Inputs/Checkbox";
import Button from "../../components/inputs-components/Button";
import "./styles.scss";

const months = [
  { name: "January", value: "01" },
  { name: "February", value: "02" },
  { name: "March", value: "03" },
  { name: "Apirl", value: "04" },
  { name: "May", value: "05" },
  { name: "June", value: "06" },
  { name: "July", value: "07" },
  { name: "Augest", value: "08" },
  { name: "September", value: "09" },
  { name: "October", value: "10" },
  { name: "November", value: "11" },
  { name: "December", value: "12" },
];

const genders = ["male", "female", "non-binary"];

const SignUp = () => {
  return (
    <div className="container">
      <div className="logo">
        <img alt="logo" />
      </div>
      <h1 className="heading">Sign up for free to start listening.</h1>
      <Button
        label="Sign up with Facebook"
        style={{ background: "#1877f2", color: "white" }}
      />
      <p className="or_container">or</p>
      <form className="form_container">
        <h2 className="form_heading">Sign up with your email address</h2>
        <div className="input_container">
          <TextField
            label="What's your email?"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="input_container">
          <TextField
            label="Create a password"
            placeholder="Create a password"
            name="password"
            type="password"
          />
        </div>
        <div className="input_container">
          <TextField
            label="What should we call you?"
            placeholder="Enter a profile name"
            name="name"
          />
        </div>
        <div className="date_of_birth_container">
          <p>What's your date of birth?</p>
          <div className="date_of_birth">
            <div className="month">
              <Select
                name="month"
                label="Month"
                placeholder="Months"
                options={months}
              />
            </div>
            <div className="date">
              <TextField
                label="Date"
                placeholder="DD"
                name="date"
                required={true}
              />
            </div>
            <div className="year">
              <TextField
                label="Year"
                placeholder="YYYY"
                name="year"
                required={true}
              />
            </div>
          </div>
        </div>
        <div className="input_container">
          <Radio
            label="What's your gender?"
            name="gender"
            options={genders}
            required={true}
          />
        </div>
        <div className="checkbox_container">
          <Checkbox
            required={true}
            label="Share my registration data with Spotify's content providers for marketing purposes."
          />
        </div>
        <p className="terms_condition">
          By clicking on sign-up, you agree to Spotify's{" "}
          <a href="/#">Terms and Conditions of Use.</a>
        </p>
        <p className="terms_condition">
          To learn more about how Spotify collects, uses, shares and protects
          your personal data, please see{" "}
          <a href="/#">Spotify's Privacy Policy.</a>
        </p>
        <div className="submit_btn_wrapper">
          <Button label="Sign Up" type="submit" />
        </div>
        <p className="terms_condition" style={{ fontSize: "1.6rem" }}>
          Have an account? <Link to="/login"> Log in.</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
