function postsCounter() {
  request = require('request-json');
  var client = request.newClient('https://glowing-fire-6569.firebaseio.com');

  function postsCount() {
    client.get('posts.json', function(err, res, body) {
      if (!err) {
        var result = body.length;
        return result;
      }
    });
  }

  return postsCount();
};

console.log(postsCounter());

var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = 1;
rule.second = [new schedule.Range(0, 59)];


function randomNumber() {
  var numberOfPosts = postsCounter();
  var randomItem = Math.floor(Math.random()*numberOfPosts);
  return randomItem;
};

var j = schedule.scheduleJob(rule, function() {
  console.log(randomNumber());
});
