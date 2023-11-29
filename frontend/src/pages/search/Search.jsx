import React from "react";
import Layout from "../../layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import CategoryCard from "../../components/category/CategoryCard";

const Search = () => {
  return (
    <Layout>
      <Navbar />
      <div className="home_cards">
        <CategoryCard />
      </div>
    </Layout>
  );
};

export default Search;
