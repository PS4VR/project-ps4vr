import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/Main/Main';
import NewsMain from './components/News/NewsMain';
import GamesMain from './components/Games/GamesMain';
import VideosMain from './components/Videos/VideosMain';
import store from './store';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import '../res/styles/common.css';

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
});

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={NewsMain}/>
        <Route path="/news" component={NewsMain}/>
        <Route path="/games" component={GamesMain}/>
        <Route path="/videos" component={VideosMain}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
//<IndexRoute component={NewsMain} />