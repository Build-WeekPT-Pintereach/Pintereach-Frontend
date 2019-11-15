import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getToken } from './utils/api';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Articles from './components/Articles';
import UpdateArticle from './components/UpdateArticle';


import './App.css';

function App() {
  const signedIn = getToken()

  return (
    <div className="wrapper">
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>

          {!signedIn && <Link to="/login">Login</Link>}
          {signedIn && <Link to="/logout">Logout</Link>}
          <Link to='/dashboard'>Article List</Link>
          <Link to='/articles'>Articles</Link>
          <Link to='/updatearticle'>Update Article</Link>
          </nav>

          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        <ProtectedRoute exact path='/articlelist' component={Dashboard} />
        <ProtectedRoute exact path='/articles' component={Articles} />
        <ProtectedRoute exact path='/updatearticle' component={UpdateArticle} />
        <ProtectedRoute exact path="/logout" component={Logout} />

    </div>
      </div>
  );
}

export default withRouter(App);

// "https://cors-anywhere.herokuapp.com/"

