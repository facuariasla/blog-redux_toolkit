import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <hr />
      <PostsList />
      <hr />
    </div>
  );
}

export default App;
