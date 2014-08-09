/**
 * Config, variable
 */

/**
 * Method
 */
Meteor.methods({
    'insertNewTodo': function (todo) {
        try {            
            console.log(todo);
        }
        catch(err){
            if(err.reason)
                throw new Meteor.Error(403, err.reason);
            throw new Meteor.Error(403, err.message);
        }
    }
});
/**
 * Function or class
 */
var insert = function (doc) {
    
};
/**
 * export
 */

/**
 * Quick test
 */
Meteor.startup(function () {
    
});