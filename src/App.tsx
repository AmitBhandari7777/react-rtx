import Counter from './counter/components/Counter';
import './App.css';
import SideBar from './sidebar/components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostContainer from './post/containers/PostContainer';
import { TodoContainer } from './todo/container/TodoContainer';
import ProductContainer from './product/container/ProductContainer';

function App() {

  return (
    <div className="App" id="outer-container">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Router>
          <Routes>

            <Route path="/" element={<Counter />} />
            <Route path="/todo" element={<TodoContainer />} />
            <Route path="/post" element={<PostContainer />} />
            <Route path="/product" element={<ProductContainer />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
