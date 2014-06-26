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
        var currentPostPrimaryContent = snapshot.val().primary_content;
        var currentPostSourceNote = snapshot.val().sourceNote;
        var currentPostSourceTitle = snapshot.val().sourceTitle;
        var currentPostSourceUrl = snapshot.val().sourceUrl;

        APP.setCurrentPostData(
          currentPostCreationDate,
          currentPostPrimaryContent,
          currentPostSourceNote,
          currentPostSourceTitle,
          currentPostSourceUrl
        );
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

  setCurrentPostData: function(
      currentPostCreationDate,
      currentPostPrimaryContent,
      currentPostSourceNote,
      currentPostSourceTitle,
      currentPostSourceUrl
    ) {

    var currentPostSetRef = new Firebase('https://glowing-fire-6569.firebaseio.com/currentPost');
    currentPostSetRef.remove();

    if (currentPostCreationDate) {
      currentPostSetRef.child('creationDate').set(currentPostCreationDate);
    }
    if (currentPostPrimaryContent) {
      currentPostSetRef.child('primary_content').set(currentPostPrimaryContent);
    }
    if (currentPostSourceNote) {
      currentPostSetRef.child('sourceNote').set(currentPostSourceNote);
    }
    if (currentPostSourceTitle) {
      currentPostSetRef.child('sourceTitle').set(currentPostSourceTitle);
    }
    if (currentPostSourceUrl) {
      currentPostSetRef.child('sourceUrl').set(currentPostSourceUrl);
    }
  },

  // set up node-schedule job:

  runSchedule: function() {
    var schedule = require('node-schedule');
    var rule = new schedule.RecurrenceRule();
    rule.minute = [new schedule.Range(0, 59)];

    // initiate node-schedule job to update
    var job = schedule.scheduleJob(rule, function() {
      APP.getCurrentPost();
    });
  },

  init: function(){
    APP.runSchedule();
  }
};

APP.init();
