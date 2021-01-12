import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Main from './Main';
import Trainer from '../pages/Trainer';
import Login from '../pages/Login';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Dashboard url="/dashboard" Component={Main} />
      <Dashboard url="/trainer" Component={Trainer} />
    </Router>
  );
}

export default App;
