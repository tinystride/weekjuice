App.Post = DS.Model.extend({
  content: DS.attr(),
  sourceNote: DS.attr(),
  sourceUrl: DS.attr(),
  sourceTitle: DS.attr(),
  creationDate: DS.attr()
})

App.Post.FIXTURES = [{
  id: 1,
  content: "What little things can I change in my routine to make sure in doing my best at my job? What little things can I do differently to ensure I'm looking out for the interests of my employers? I dread getting stagnant at work. I want to fight that constantly. I want to be the best at my job.",
  creationDate: "Sun, 16 Mar 2014 20:23:43 EST"
}, {
  id: 2,
  content: "Am I providing real value to my industry? And I do mean my industry—not just my employer.",
  sourceNote: "Read this",
  sourceUrl: "http://calnewport.com/blog/2013/09/08/will-you-get-tenure-replicate-the-academic-promotion-process-to-get-more-value-out-of-your-work/",
  sourceTitle: "Will You Get Tenure?",
  creationDate: "Tues, 18 Mar 2014 20:23:43 EST"
}, {
  id: 3,
  content: "Fight complexity as an enemy",
  creationDate: "Wed, 19 Mar 2014 20:23:43 EST"
}, {
  id: 4,
  content: "Treat boring projects like a race - not a prison cell.",
  creationDate: "Thurs, 20 Mar 2014 20:23:43 EST"
}, {
  id: 5,
  content: "Write down what you're working on",
  creationDate: "Thurs, 20 Mar 2014 20:23:43 EST"
}];