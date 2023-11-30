import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://my-news-2d2d.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://my-news-2d2d.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};
