App.Router.map(function(){
  this.resource('post', { path:'/:post_id' });
  this.route('purpose');
});

// Remove hash url routing:
App.Router.reopen({
  location: 'history'
});
