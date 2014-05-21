App.ApplicationController = Ember.ArrayController.extend({
  sortProperties: ['creationDate'],

  randomPost: function() {
    var itemsCount = this.get('length');

    var randomItemNumber;

    function retrieveRandomItemNumber() {
      return $.ajax({
        url: "https://glowing-fire-6569.firebaseio.com/currentPost.json",
        dataType: 'json'
      });
    }

    var setRandomItem = retrieveRandomItemNumber().done(function(result) {
      var randomItemNumber = result;
      // I think I just need to fix this "this"
      // scoping error for the program to work.
      return this.objectAt(randomItemNumber);
    }).fail(function() {
      console.log( "Oops, the promise failed." );
    });

  }.property('length')
});