import React, { Component } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import logo from './logo.svg';
import './App.css';
import NoRouteMatch from './containers/404';

import Home from './containers/Home';
import SignIn from './containers/SignIn';
import Detail from './containers/Detail';
import Profile from './containers/Profile';
import PokemonUpdate from './containers/PokemonUpdate';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.scss';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          {/* <ContextProvider> */}
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/pokemonupdate" exact component={PokemonUpdate} />
            <Route path="/detail/:pokemonname" exact component={Detail} />
                       <Route component={NoRouteMatch} />
          </Switch>
          {/* <Footer /> */}
          {/* </ContextProvider> */}
        </div>
      </HashRouter >
    );
  }
}

export default hot(module)(App);
