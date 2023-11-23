import { Link } from "react-router-dom";
import { spotify } from "../../constants";
import "./styles.scss";

const Signup = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="container">
      <div className="logo">
        <img src={spotify} alt="logo spotify" />
      </div>
      <div className="signup__wrapper">
        <div className="signup__div">
          <h1>Sign up for free to start listening.</h1>
          <span className="or__">or</span>
          <p>Sign up with your email address</p>
          <form>
            <div className="signupInputs_wrap">
              <label htmlFor="email">Whats your email?</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="your email"
              />
            </div>
            <div className="signupInputs_wrap">
              <label htmlFor="email">Create password</label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="your password"
              />
            </div>
            <div className="signupInputs_wrap">
              <label htmlFor="username">How should we call you?</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="your username"
              />
              <small>it will appear on your profile</small>
            </div>
            <div className="signupInputs_wrap">
              <label htmlFor="username">When is your birthday?</label>
              <div className="extraInfo">
                <div className="dayWrapper">
                  <label htmlFor="day">Day</label>
                  <input
                    type="text"
                    id="username"
                    name="day"
                    placeholder="01"
                  />
                </div>
                <div className="monthWrapper">
                  <label htmlFor="month">Month</label>
                  <select type="radio" id="username" name="month">
                    {months.map((m) => {
                      return (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="yearWrapper">
                  <label htmlFor="year">Year</label>
                  <input
                    type="text"
                    id="username"
                    name="year"
                    placeholder="1997"
                  />
                </div>
              </div>
              <div className="extraInfo2">
                <div className="maleWrap">
                  <label htmlFor="male" className="ml-2 inline-block">
                    Male
                  </label>
                  <input
                    type="radio"
                    id="male"
                    name="male"
                    placeholder="male"
                  />
                </div>
                <div className="maleWrap">
                  <label htmlFor="female" className="ml-2 inline-block">
                    Female
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="female"
                    placeholder="female"
                  />
                </div>
                <div className="maleWrap">
                  <label htmlFor="binary" className="ml-2 inline-block">
                    Binary
                  </label>
                  <input
                    type="radio"
                    id="binary"
                    name="binary"
                    placeholder="binary"
                  />
                </div>
              </div>
            </div>
            <div className="marketing">
              <div className="marketing_inputs">
                <input type="checkbox" className="green-checkbox" />
                <p className="checkbox_p">
                  I would prefer not to receive marketing messages from Spotify
                </p>
              </div>
              <div className="marketing_inputs">
                <input type="checkbox" className="green-checkbox" />
                <p className="checkbox_p">
                  Share my registration data with Spotify's content providers
                  for marketing purposes.
                </p>
              </div>
              <p className="copyrightAgrs">
                By clicking on sign-up, you agree to{" "}
                <Link to="/">Spotify's Terms and Condition</Link> of Use.
              </p>
              <p className="copyrightAgrs">
                To learn more about how Spotify collects, uses, shares and
                protects your personal data, please see{" "}
                <Link to="/">Spotify's Privacy Policy.</Link>
              </p>
            </div>
            <div className="signinBtn_">
              <input type="submit" value="Signup" />
            </div>
          </form>
          <div className="separatorLine"></div>
          <p className="haveAccount">
            <span>Already have an account? </span>

            <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
