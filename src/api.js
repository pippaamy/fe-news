import axios from "axios";

export const getArticles = (topic = "", sortby, order, p) => {
  return axios
    .get(
      `https://my-news-2d2d.onrender.com/api/articles?topic=${topic}&sort_by=${sortby}&order=${order}&p=${p}`
    )
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

export const postComments = (article_id, comment) => {
  return axios
    .post(
      `https://my-news-2d2d.onrender.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => {
      return data.newComment;
    });
};

export const getTopics = () => {
  return axios
    .get("https://my-news-2d2d.onrender.com/api/topics")
    .then((res) => {
      return res.data;
    });
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(`https://my-news-2d2d.onrender.com/api/comments/${comment_id}`)
    .then((res) => {
      return res.data;
    });
};

export const patchComment = (comment_id, amount) => {
  return axios.patch(
    `https://my-news-2d2d.onrender.com/api/comments/${comment_id}`,
    { inc_votes: amount }
  );
};

export const postArticle = (author, title, body, topic, article_img_url) => {
  return axios
    .post("https://my-news-2d2d.onrender.com/api/articles", {
      author: author.username,
      title: title,
      body: body,
      topic: topic,
      article_img_url: article_img_url,
    })
    .then(({ data }) => {
      return data.newArticle;
    });
};

export const postTopic = (topicSlug, topicDescription) => {
  return axios
    .post("https://my-news-2d2d.onrender.com/api/topics", {
      slug: topicSlug,
      description: topicDescription,
    })
    .then(({ data }) => {
      return data.newTopic;
    });
};
