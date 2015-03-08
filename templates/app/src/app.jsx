var React       = require("react"),
    Fluxxor     = require("fluxxor");

var actions = require('./actions.jsx');
var stores  = require('./stores.jsx');
var flux    = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

var Application = require('./components/application.jsx')

React.render(<Application flux={flux} />, document.getElementById("app"));