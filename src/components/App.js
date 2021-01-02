import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exatch path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
