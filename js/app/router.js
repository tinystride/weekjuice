App.Router.map(function(){
  this.route('posts');
  this.resource('post', { path:'/posts/:post_id' }, function(){
    this.route('edit');
  });
  this.route('create');
});
