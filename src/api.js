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

export const getComments = (article_id) => {
  return axios
    .get(
      `https://my-news-2d2d.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

export const patchArticle = (article_id, amount) => {
  return axios.patch(
    `https://my-news-2d2d.onrender.com/api/articles/${article_id}`,
    { inc_votes: amount }
  );
};

export const getUsers = () => {
  return axios
    .get("https://my-news-2d2d.onrender.com/api/users")
    .then(({ data }) => {
      return data.users;
    });
};
