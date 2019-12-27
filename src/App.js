import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import WelcomePage from "./components/authentication/WelcomePage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/add_form" component={AddForm} />
          <Route exact path="/" component={WelcomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
