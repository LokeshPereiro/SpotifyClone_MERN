import { Link, useNavigate } from "react-router-dom";
import { spotify } from "../../constants";
import "./styles.scss";
import { useState } from "react";
import { toast } from "react-toastify";
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
const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    day: "",
    username: "",
    year: "",
    month: "",
    password: "",
    gender: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    if (e.target.name === "gender") {
      if (e.target.id === "m") {
        setUserDetails({ ...userDetails, gender: "M" });
      }
      if (e.target.id === "f") {
        setUserDetails({ ...userDetails, gender: "F" });
      }
      if (e.target.id === "o") {
        setUserDetails({ ...userDetails, gender: "O" });
      }
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    // console.log(userDetails);

    const index = months.indexOf(userDetails.month);
    let DOB = `${index}-${userDetails.day}-${userDetails.year}`;
    const { email, password, gender, username } = userDetails;
    let userInfo = {
      email,
      password,
      username,
      DOB,
      gender,
    };
    console.log(userInfo);
    const res = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await res.json();
    if (data.success) {
      setUserDetails({
        email: "",
        day: "",
        username: "",
        year: "",
        month: "",
        password: "",
        gender: "",
      });
      toast.success(data.message);
      localStorage.setItem("loggedUser", JSON.stringify(data.token));
      navigate("/login");
    } else {
      toast.error(data.message);
    }
  };

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
          <form onSubmit={registerUser}>
            <div className="signupInputs_wrap">
              <label>Whats your email?</label>
              <input
                type="text"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={onChange}
                placeholder="your email"
              />
            </div>
            <div className="signupInputs_wrap">
              <label>Create password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={userDetails.password}
                onChange={onChange}
                placeholder="your password"
              />
            </div>
            <div className="signupInputs_wrap">
              <label>How should we call you?</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userDetails.username}
                onChange={onChange}
                placeholder="your username"
              />
              <small>it will appear on your profile</small>
            </div>
            <div className="signupInputs_wrap">
              <label>When is your birthday?</label>
              <div className="extraInfo">
                <div className="dayWrapper">
                  <label htmlFor="day">Day</label>
                  <input
                    type="text"
                    value={userDetails.day}
                    onChange={onChange}
                    id="day"
                    name="day"
                    placeholder="01"
                  />
                </div>
                <div className="monthWrapper">
                  <label>Month</label>
                  <select
                    type="radio"
                    value={userDetails.month}
                    onChange={onChange}
                    id="month"
                    name="month"
                  >
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
                  <label>Year</label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={userDetails.year}
                    onChange={onChange}
                    placeholder="1997"
                  />
                </div>
              </div>
              <div className="extraInfo2">
                <div className="maleWrap">
                  <label className="ml-2 inline-block">Male</label>
                  <input
                    type="radio"
                    id="m"
                    name="gender"
                    value={userDetails.gender}
                    onChange={onChange}
                    placeholder="male"
                  />
                </div>
                <div className="maleWrap">
                  <label className="ml-2 inline-block">Female</label>
                  <input
                    type="radio"
                    id="f"
                    name="gender"
                    value={userDetails.gender}
                    onChange={onChange}
                    placeholder="female"
                  />
                </div>
                <div className="maleWrap">
                  <label className="ml-2 inline-block">Other</label>
                  <input
                    type="radio"
                    id="o"
                    name="gender"
                    value={userDetails.gender}
                    onChange={onChange}
                    placeholder="other"
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
