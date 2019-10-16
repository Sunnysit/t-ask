import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './views/Home'
import Articles from './views/Articles'
import Events from './views/Events'
import AboutUs from './views/AboutUs'
import Contact from './views/Contact'
import Search from './views/Search'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

function App() {

  // const languages = useSelector(state => state.languages);

  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Route exact path="/" component={ Home } />
        <Route path="/articles" component={ Articles } />
        <Route path="/events" component={ Events } />
        <Route path="/about" component={ AboutUs } />
        <Route path="/contact" component={ Contact } />
        <Route path="/search" component={ Search } />
      </main>
    </BrowserRouter>
  );
}

export default App;
