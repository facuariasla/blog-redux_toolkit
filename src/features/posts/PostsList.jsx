import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  // La diferencia entre estos 2, es que si el state cambia, solo necesitaremos hacer cambios en el slice, y no en cada componente (?)
  // const posts = useSelector(state => state.posts);
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section className="post_section">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
