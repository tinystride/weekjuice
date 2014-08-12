App.Router.map(function(){
  this.resource('post', { path:'/:post_id' });
  this.route('purpose');
});
