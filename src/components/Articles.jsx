import React from "react";
import Article from "./ui/Article";
import Title from "./ui/Title";
import { BLOGS } from "../constants";


const Articles = () => {
  return (
    <section id="articles">
      <div className="container">
        <Title title="Новости и статьи" />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {BLOGS && BLOGS.map((item, index) => (
            <Article key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
