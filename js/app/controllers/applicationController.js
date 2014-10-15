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
  }.property('@each.id', 'currentPostId'),

  currentPathChanged: function() {
    window.scrollTo(0,0);
  }.observes('currentPath')
});
