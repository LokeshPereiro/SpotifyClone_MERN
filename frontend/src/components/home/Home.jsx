import Layout from "../../layout/Layout";
import "./styles.scss";
import Card from "../card/Card";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="home_cards">
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
