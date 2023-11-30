import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://my-news-2d2d.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};
