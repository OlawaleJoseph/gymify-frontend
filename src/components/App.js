import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Main from './Main';
import Trainers from '../containers/Trainers';
import Login from '../pages/Login';
import Trainer from '../pages/Trainer';
import Appointments from '../pages/Appointments';
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
      <Dashboard url="/trainers" Component={Trainers} />
      <Dashboard url="/trainers/:id" Component={Trainer} />
      <Dashboard url="/appointments" Component={Appointments} />
    </Router>
  );
}

export default App;
