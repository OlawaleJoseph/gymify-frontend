import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Register from '../pages/Register';
import ProtectedRoute from '../pages/ProtectedRoute';
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
        <ProtectedRoute exact path="/dashboard" Component={Main} />
        <ProtectedRoute exact path="/trainers" Component={Trainers} />
        <ProtectedRoute exact path="/trainers/:id" Component={Trainer} />
        <ProtectedRoute exact path="/appointments" Component={Appointments} />
      </Switch>
    </Router>
  );
}

export default App;
