import React from "react";
import Layout from "../../layout/Layout";
import "./styles.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "../card/Card";
const Home = () => {
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
          <button>Sign up</button>
          <button>Log in</button>
        </div>
      </div>
      <div className="home_cards">
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
