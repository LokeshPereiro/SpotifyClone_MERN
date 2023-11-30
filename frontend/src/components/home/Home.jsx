import Layout from "../../layout/Layout";
import "./styles.scss";
import Card from "../card/Card";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="home_cards">
        <Card />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
