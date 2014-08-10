/**
 * Config, variable
 */

/**
 * Method
 */
Meteor.methods({
    'insertNewTodo': function (todo) {
        try {            
            return insert({                
                todo: todo,             
            });
        }
        catch(err){
            if(err.reason)
                throw new Meteor.Error(403, err.reason);
            throw new Meteor.Error(403, err.message);
        }
    },
    'removeTodo' : function (id) {
        return remove({
            _id: id,
        });
    }
});
/**
 * Function or class
 */
var insert = function (doc) {
    doc.created = new Date();
    return Todo.insert(doc);
};

var remove = function (doc) {
    return Todo.remove(doc);
}
/**
 * export
 */

/**
 * Quick test
 */
Meteor.startup(function () {
    
});