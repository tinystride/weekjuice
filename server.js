var Firebase = require('firebase');

var APP = {
  // query Firebase for total number of posts:

  // assign a random post based on total number of posts:
  createRandomPostIndex: function(postsCount) {
    var randomItem = Math.floor(Math.random()*postsCount);
    return randomItem;
  },

  // get currentPost's data
  getCurrentPostData: function(currentPostIndex) {
    var currentPostGetRef = new Firebase('https://glowing-fire-6569.firebaseio.com/posts/' + currentPostIndex);

    currentPostGetRef.on('value', function(snapshot) {
      if(snapshot.val() === null) {
        alert("Oops, no data here partner.");
      } else {
        var currentPostCreationDate = snapshot.val().creationDate;
        console.log(currentPostCreationDate);
        var currentPostPrimaryContent = snapshot.val().primary_content;
        console.log(currentPostPrimaryContent);
        var currentPostSourceNote = snapshot.val().sourceNote;
        console.log(currentPostSourceNote);
        var currentPostSourceTitle = snapshot.val().sourceTitle;
        console.log(currentPostSourceTitle);
        var currentPostSourceUrl = snapshot.val().sourceUrl;
        console.log(currentPostSourceUrl);
      }
    });
  },

  getCurrentPost: function() {
    var rootRef = new Firebase('https://glowing-fire-6569.firebaseio.com/posts');

    rootRef.on('value', function(snapshot) {
      if(snapshot.val() === null) {
        alert("Oops, no data here partner.");
      } else {
        var postsCount = snapshot.numChildren();
        console.log('Total number of posts: ' + postsCount);

        var currentPostIndex = APP.createRandomPostIndex(postsCount);
        console.log('currentPostIndex: ' + currentPostIndex);
        APP.getCurrentPostData(currentPostIndex);
      }
    });
  },

  // set up node-schedule job:

  runSchedule: function() {
    var schedule = require('node-schedule');
    var rule = new schedule.RecurrenceRule();
    rule.minute = [new schedule.Range(0, 59)];

    // initiate node-schedule job to update

    var job = schedule.scheduleJob(rule, function() {
      APP.getCurrentPost();
      // console.log('currentPostCreationDate: ' + currentPostCreationDate);

      // var currentPostSetRef = new Firebase('https://glowing-fire-6569.firebaseio.com/currentPost');
      // currentPostSetRef.child('creationDate').set(currentPostCreationDate);
      // currentPostSetRef.child('primary_content').set(currentPostPrimaryContent);
      // currentPostSetRef.child('sourceNote').set(currentPostSourceNote);
      // currentPostSetRef.child('sourceTitle').set(currentPostSourceTitle);
      // currentPostSetRef.child('sourceUrl').set(currentPostSourceUrl);
    });
  }
};

APP.runSchedule();
