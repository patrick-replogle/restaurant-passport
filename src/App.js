import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import "./App.css";

import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import WelcomePage from "./components/authentication/WelcomePage";
import MainPage from "./components/MainPage";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={MainPage} />
          <Route exact path="/add_form" component={AddForm} />
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
