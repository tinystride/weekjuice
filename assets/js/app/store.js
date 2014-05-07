App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://glowing-fire-6569.firebaseio.com/")
});

App.ApplicationSerializer = DS.FirebaseSerializer.extend();