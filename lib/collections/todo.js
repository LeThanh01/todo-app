Todo = new Meteor.Collection('todo');

Todo.deny({
    insert: function() {return true;},
    remove: function() {return true;},
});

