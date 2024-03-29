/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {Routes, Route} = require('react-router');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

React.renderComponent(
  <Routes location="history">
    <Route name="app" path="/" handler={require('./layouts/Default.jsx')}>
      <Route name="home" path="/" handler={require('./pages/Home.jsx')} />
      <Route name="privacy" handler={require('./pages/Privacy.jsx')} />
      <Route name="mypage" handler={require('./pages/MyPage.jsx')} />
	  <Route name="importpaidinvoices" handler={require('./pages/ImportPaidInvoices.jsx')} />
    </Route>
  </Routes>,
  document.body
);