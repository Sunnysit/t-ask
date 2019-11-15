import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './views/Home'
import Articles from './views/Articles'
import Events from './views/Events'
import AboutUs from './views/AboutUs'
import Contact from './views/Contact'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import Register from './views/Register'
import UserDashboard from './views/UserDashboard'
import Test from './views/Test'

library.add(fab)
library.add(fas)

function App() {

  // const languages = useSelector(state => state.languages);

  return (
    <BrowserRouter>
      <Header />
      <main className="app">
        <Route exact path="/" component={ Home } />
        <Route path="/articles" component={ Articles } />
        <Route path="/events" component={ Events } />
        <Route path="/about" component={ AboutUs } />
        <Route path="/contact" component={ Contact } />
        <Route path="/register" component={ Register } />
        <Route path="/profile" component={ UserDashboard } />
        <Route path="/test" component= { Test }/>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
