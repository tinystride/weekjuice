App.Post = DS.Model.extend({
  content: DS.attr(),
  sourceNote: DS.attr(),
  sourceUrl: DS.attr(),
  creationDate: DS.attr()
})

App.Post.FIXTURES = [{
  id: 1,
  content: "This is the content from post 1",
  sourceNote: "I really should explain myself better",
  sourceUrl: "http://neilrenicker.com",
  creationDate: "Tues, 18 Mar 2014 20:23:43 EST"
}, {
  id: 2,
  content: "This is content from post 2",
  sourceNote: "I really should explain myself better",
  sourceUrl: "http://neilrenicker.com",
  creationDate: "Tues, 18 Mar 2014 20:23:43 EST"
}];