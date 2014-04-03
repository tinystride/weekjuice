App.PostsController = Ember.ArrayController.extend({
  sortProperties: ['creationDate'],

  randomPost: function() {
    var itemsCount = this.get('length');
    var randomItem = (Math.floor(Math.random()*itemsCount));
    return this.objectAt(randomItem);
  }.property('length')
});