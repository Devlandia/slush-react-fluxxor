var TodoStore = require('./stores/todo');

var stores = {
  TodoStore: new TodoStore()
};

module.exports = stores;