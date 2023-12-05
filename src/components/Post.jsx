import PostArticle from "./PostArticle";
import PostTopic from "./PostTopic";
const Post = ({ topics }) => {
  return (
    <>
      <PostArticle topics={topics} />
      <br />
      <PostTopic topics={topics} />
    </>
  );
};

export default Post;
