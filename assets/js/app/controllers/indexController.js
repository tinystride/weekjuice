App.IndexController = Ember.ArrayController.extend({
  needs: ['application'],
  currentPost: Ember.computed.alias("controllers.application.currentPost")
});