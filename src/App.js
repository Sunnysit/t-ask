import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Home from './views/Home'


function App() {

  const languages = useSelector(state => state.languages);

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={ Home } />
      </div>
      <p>{languages.msg}</p>
    </BrowserRouter>
  );
}

export default App;
