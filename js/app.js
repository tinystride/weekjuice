window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.ApplicationController = Ember.ArrayController.extend({
  sortProperties: ['creationDate'],

  setupCurrentPostListener: function() {
    var currentPostRef = new Firebase('https://glowing-fire-6569.firebaseio.com/currentPostId');
    var self = this;

    currentPostRef.on('value', function(snapshot) {
      self.set('currentPostId', snapshot.val().toString());
    });
  }.on('init'),

  currentPost: function() {
    var length = this.get('length');
    var currentPostId = this.get('currentPostId');

    if (length == 0 || !currentPostId ) {
      return;
    };

    return this.findBy('id', currentPostId);
  }.property('@each.id', 'currentPostId')
});

App.IndexController = Ember.ArrayController.extend({
  needs: ['application'],
  currentPost: Ember.computed.alias("controllers.application.currentPost")
});

App.PostsController = Ember.ArrayController.extend({
  needs: ['application']
});
Ember.Handlebars.helper('formatDate', function(date){
  return moment(date).format('MMMM DD, YYYY');
});

Ember.Handlebars.helper('weekNumber', function(){
  return moment.utc().format('ww');
});

App.Post = DS.Model.extend({
  primary_content: DS.attr(),
  sourceNote: DS.attr(),
  sourceUrl: DS.attr(),
  sourceTitle: DS.attr(),
  creationDate: DS.attr()
})
App.Router.map(function(){
  this.route('posts');
  this.resource('post', { path:'/posts/:post_id' }, function(){
    this.route('edit');
  });
  this.route('create');
});

App.ApplicationRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('post');
  }
});
App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('application');
  }
});
App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://glowing-fire-6569.firebaseio.com/")
});

App.ApplicationSerializer = DS.FirebaseSerializer.extend();