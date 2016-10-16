import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/Main/Main';
import NewsMain from './components/News/NewsMain';
import GameMain from './components/Games/GameMain';
import VideoMain from './components/Videos/VideoMain'
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
        <Route path="/games" component={GameMain}/>
        <Route path="/videos" component={VideoMain}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
//<IndexRoute component={NewsMain} />
