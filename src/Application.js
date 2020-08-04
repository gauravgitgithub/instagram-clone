import React,{ useContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import SignIn from './Components/Auth/SignIn';
import UploadPosts from './Components/Upload/UploadPosts';
import Posts from './Components/Posts';
import UserProvider, { UserContext } from "./Providers/UserProvider";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Application( ) {


  const user = useContext(UserContext);

  return (
  		<div className="App">
  		<UserProvider>
        { user ?
	          <Router>
	          		<Switch>
			              <Route path="/new-post">
				                <Header previousPage="/" />
				                <UploadPosts />
				          </Route>
				          <Route path="/profile">
				                <Header previousPage="/" />
				                <Profile />
				          </Route>
			              <Route path="/">
			                    <Header />
						        <Posts />
			              </Route>
	          		</Switch>
	          </Router>

                    
      	:
        <Router>
	          	<Switch>
			          <Route path="/">
			          		<Header />
			                <SignIn />
			          </Route>
			    </Switch>
		</Router>
       }
  		</UserProvider>
       </div>
  );
}

export default Application;
