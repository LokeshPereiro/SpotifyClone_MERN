import React from "react";
import Layout from "../../layout/Layout";
import "./styles.scss";
import { FaArrowRight, FaArrowLeft, FaUser } from "react-icons/fa";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="home_registerOptions secondar_bg">
        <div className="home_navigationBtns d_flex">
          <span>
            <FaArrowLeft />
          </span>
          <span>
            <FaArrowRight />
          </span>
        </div>
        <div className="home_signings">
          {isAuthenticated ? (
            <FaUser />
          ) : (
            <>
              {" "}
              <Link to="/signup" className="btn">
                Sign up
              </Link>
              <Link className="btn" to="/login">
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="home_cards">
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
