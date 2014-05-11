App.Post = DS.Model.extend({
  primary_content: DS.attr(),
  sourceNote: DS.attr(),
  sourceUrl: DS.attr(),
  sourceTitle: DS.attr(),
  creationDate: DS.attr()
})