import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Body from './components/body.js';
import Shelves from './components/shelves.js'
import Bins from './components/bins.js'


export default (
  <Switch>
    <Route component={Body} exact path="/" />
    <Route component={Shelves} path="/shelf" />
    <Route component={Bins} path='/shelf/bin/' />
  </Switch>
)
