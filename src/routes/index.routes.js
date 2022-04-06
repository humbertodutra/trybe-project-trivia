import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Game from '../pages/Game';
import Ranking from '../pages/Ranking';
import Feedback from '../pages/Feedback';
import Settings from '../pages/Settings';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/ranking" component={ Ranking } />
      <Route exact path="/feedback" component={ Feedback } />
      <Route exact path="/settings" component={ Settings } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
