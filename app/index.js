var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = "e0036f4b387d4a36b1e4215b6d07a997";
var sentryApp = "96656";
var sentryURL = "https://"+sentryKey+"@sentry.io/"+sentryApp;



Raven.config(sentryURL).install();

ReactDOM.render(routes, document.getElementById("app") );
