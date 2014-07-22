Ember.Handlebars.helper('formatDate', function(date){
  return moment(date).format('MMMM DD, YYYY');
});

Ember.Handlebars.helper('weekNumber', function(){
  return moment.utc().format('ww');
});

Ember.Handlebars.helper('currentFullDate', function(){
  return moment.utc().format('dddd MMMM DD, YYYY');
});
