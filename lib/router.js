Router.configure({
	layoutTemplate: 'layout',
    notFoundTemplate: 'notFoundPage',
    loadingTemplate : 'loadingPage',
});

Router.map(function() {
	this.route('root', {
        where: 'client',
        path: '/',
        template: 'testMeteor01',
        layoutTemplate: 'layout',
        yieldTemplates: {},        
        waitOn: function () {
            Meteor.subscribe('todos');
        }
    });
});