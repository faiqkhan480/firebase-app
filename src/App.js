import React, {Component} from 'react';
import AuthProvider from "./config/auth";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from "./config/privateroute";
import ProtectedRoute from "./config/ProtectedRoute";
import UnProtectedRoute from "./config/UnProtectedRoute";
import fire from './config/firebase'
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { appStyles } from './components/styles'
import Appbar from "./components/appbar";
import SignUp  from './components/signup'
import Home  from './components/home'
import Login  from './components/login'
import User  from './components/user'
import Notfound  from './components/notfound'
import Template from './components/template'

class App extends Component {

  render() {
      return (
          <AuthProvider>
              <Router>
                  <Appbar/>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/template" component={Template} />
                      <Route exact path="/sign_up" component={SignUp} />
                      <UnProtectedRoute exact path="/login" component={Login} />
                      <ProtectedRoute exact path="/user" component={User} />
                      <Route component={Notfound} />
                  </Switch>
              </Router>
           </AuthProvider>
      );
  }
}

export default withStyles(appStyles)(App);
