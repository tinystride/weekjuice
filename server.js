// query Firebase for total number of posts:

var Firebase = require('firebase');
var rootRef = new Firebase('https://glowing-fire-6569.firebaseio.com/posts');
var postsCount;

rootRef.on('value', function(snapshot) {
  if(snapshot.val() === null) {
    alert("Oops, no data here partner.");
  } else {
    postsCount = snapshot.numChildren();
    console.log('Total number of posts: ' + postsCount);
  }
});

// assign a random post:

function randomPostIndex() {
  var randomItem = Math.floor(Math.random()*postsCount);
  console.log(randomItem);
  return randomItem;
};

// set up node-schedule job:

var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.minute = [new schedule.Range(0, 59)];

// initiate node-schedule job to update
// randomPost id in the database:

var job = schedule.scheduleJob(rule, function() {
  var randomPostRef = new Firebase('https://glowing-fire-6569.firebaseio.com/randomPost');
  randomPostRef.set(randomPostIndex());
});