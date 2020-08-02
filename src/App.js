import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import UploadPosts from './Components/Upload/UploadPosts';
import Posts from './Components/Posts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    	<Router>
              <Switch>
                      <Route path="/new-post">
                            <Header previousPage="/" />
                            <UploadPosts />
                      </Route>
                      <Route path="/">
                            <Header />
					        <Posts />
                      </Route>
              </Switch>
        </Router> 
    </div>
  );
}

export default App;
