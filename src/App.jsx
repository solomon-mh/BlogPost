import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./features/posts/postSlice";
import Layout from "./components/Layout";
import SinglePost from "./components/SinglePost";
import EditPost from "./components/EditPost";
import PostContainer from "./components/PostContainer";
import About from "./components/About";
function App() {
  const { posts } = useSelector(selectAllPosts);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PostContainer />} />
          <Route path='about' element={<About />} />
          <Route path='post/:id' element={<SinglePost posts={posts} />}></Route>
          <Route path='post/:id/edit' element={<EditPost posts={posts} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
