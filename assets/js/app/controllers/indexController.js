App.IndexController = Ember.ArrayController.extend({
  needs: ['application'],
  randomPost: Ember.computed.alias("controllers.application.randomPost")
});