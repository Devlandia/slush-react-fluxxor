var React = require("react"),
    Fluxxor = require("fluxxor");

var TodoItem = React.createClass({
  mixins: [ Fluxxor.FluxMixin(React) ],

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var style = {
      textDecoration: this.props.todo.complete ? "line-through" : ""
    };

    return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
  },

  onClick: function() {
    this.getFlux().actions.todo.toggleTodo(this.props.todo);
  }
});

module.exports = TodoItem