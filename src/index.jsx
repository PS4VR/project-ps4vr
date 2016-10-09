import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/Main/Main';
import store from './store';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import NewsMain from './components/News/NewsMain';

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
});

ReactDom.render(
  <Provider store = {store}>
    <Router history={history}>
      <Route path="/" component={Main} />
      <Route path="/news" component={NewsMain}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);