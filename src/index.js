import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers/index";
import AsteroidsList from "./components/asteroids-list";
//import AsteroidDetails from "./components/asteroid-details";
import HomePage from "./components/asteroids-search";

import 'bootstrap/dist/css/bootstrap.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/asteroids" component={AsteroidsList}/>
          {/*<Route path="/asteroids/:id" component={AsteroidDetails} />*/}
          <Route  exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
