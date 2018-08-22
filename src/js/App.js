import React from "react";
import Header from "./components/Header";

import {User} from "./components/UserTable";
import FormUser from "./components/FormUser";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store()}>

        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={User} />
              <Route path="/adduser" component={FormUser} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}