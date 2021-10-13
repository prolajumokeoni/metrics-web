import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';

function App() {
  const { posts } = useSelector((state) => state.posts);
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Posts} exact />
        {posts.map((post) => (
          <Route path={`/${post.id}`} key={post.id}>
            <SinglePost post={post} />
          </Route>
        ))}
      </Router>
    </div>
  );
}

export default App;
