Ember.Handlebars.helper('formatDate', function(date){
  return moment(date).format('MMMM DD, YYYY');
})