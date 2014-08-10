/**
 * HELPERS
 */

Template.testMeteor01.data = function () {
    return Todo.find({}, {sort: {created: -1}})
}

Template.testMeteor01.count = function () {
    return Todo.find().count()
}
/**
 * EVENTS
 */

Template.testMeteor01.events({
    'click .addButton': function (evt, tmp) {
        evt.preventDefault();
        var t = tmp.find("#newTodo").value.trim();
        if(t != ''){
            Meteor.call('insertNewTodo', t,function (err, res) {
                if(err)
                    console.log(err);
                if(res)
                    tmp.find('#newTodo').value = '';
            });
        }
        
    },
    'click  .checkbox': function (evt, tmp) {
        var id = this._id;
        if(id != ''){
            Meteor.call('removeTodo', id,function (err, res) {
                if(err)
                    console.log(err);
                if(res)
                    tmp.find('#newTodo').value = '';
            });
        }
    }
})
/**
 * CLASS FUNCTION
 */