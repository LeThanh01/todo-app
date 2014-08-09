Meteor.publish("todos", function(){
    return Todo.find({}, {sort: {created: 1}})
});