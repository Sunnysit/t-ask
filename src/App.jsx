import React from 'react';
import {BrowserRouter, Route ,Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Home from './views/Home'
import Articles from './views/Articles'
import Events from './views/Events'
import AboutUs from './views/AboutUs'
import Contact from './views/Contact'
import Search from './views/Search'


function App() {

  // const languages = useSelector(state => state.languages);

  return (
    <BrowserRouter>
      <nav>
      <ul>
        <li><Link to="/articles">Articles</Link></li>
      </ul>
      </nav>
      <div className="App">
        <Route exact path="/" component={ Home } />
        <Route path="/articles" component={ Articles } />
        <Route path="/events" component={ Events } />
        <Route path="/about" component={ AboutUs } />
        <Route path="/contact" component={ Contact } />
        <Route path="/search" component={ Search } />
      </div>
    </BrowserRouter>
  );
}

export default App;
