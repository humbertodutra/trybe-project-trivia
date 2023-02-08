import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Game from '../pages/Game';
import Ranking from '../pages/Ranking';
import Feedback from '../pages/Feedback';
import Settings from '../pages/Settings';

const Routes = () => (
  <HashRouter basename={ process.env.PUBLIC_URL }>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Game } />
      <Route path="/ranking" component={ Ranking } />
      <Route path="/feedback" component={ Feedback } />
    </Switch>
  </HashRouter>
);

export default Routes;
