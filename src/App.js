import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Posts />
      </header>
    </div>
  );
}

export default App;
