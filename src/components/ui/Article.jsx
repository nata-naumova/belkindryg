import React from "react";

const Article = ({ item }) => {
  return (
    <article className="custom-box">
      <a href="#" className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-accent">{item.type}</p>
          <p className="text-title">{item.date}</p>
        </div>

        <h3 className="line-clamp-2 text-xl text-title">
          {item.title}
        </h3>
        <p className="line-clamp-3 text-title/75">
          {item.desc}
        </p>
      </a>
    </article>
  );
};

export default Article;
