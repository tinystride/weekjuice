var Firebase = require('firebase');
var moment = require('moment');

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
        var currentPostId = currentPostIndex;

        APP.setCurrentPostData(
          currentPostCreationDate,
          currentPostPrimaryContent,
          currentPostSourceNote,
          currentPostSourceTitle,
          currentPostSourceUrl
        );

        APP.createMailchimpCampaign(
          currentPostCreationDate,
          currentPostPrimaryContent,
          currentPostSourceNote,
          currentPostSourceTitle,
          currentPostSourceUrl,
          currentPostId
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
    rule.dayOfWeek = 3;

    // initiate node-schedule job to update
    var job = schedule.scheduleJob(rule, function() {
      APP.getCurrentPost();
    });
  },

  createMailchimpCampaign: function(
      currentPostCreationDate,
      currentPostPrimaryContent,
      currentPostSourceNote,
      currentPostSourceTitle,
      currentPostSourceUrl,
      currentPostId
  ) {
    var MailChimpAPI = require('mailchimp').MailChimpAPI;
    var apiKey = '59525fbe6856f2f7c0277c518df86e14-us2';
    var currentWeek = moment.utc().format('ww');
    var currentCampaignId;

    try {
      var mailchimp = new MailChimpAPI(apiKey, { version : '2.0' });
    } catch (error) {
      console.log(error.message);
    }

    mailchimp.call('campaigns', 'create', {
      type:"regular",
      options: {
        list_id: "19af871d05",
        subject: "This week on weekjuice",
        from_email: "neilrenicker+weekjuice@gmail.com",
        from_name: "weekjuice",
        to_name: "weekjuice",
        template_id: 285541,
        folder_id: 32125,
        tracking: {
          opens: true,
          html_clicks: true,
          text_clicks: true
        },
        auto_footer: false,
        generate_text: true
      },
      content: {
        sections: {
          post_content: currentPostPrimaryContent,
          post_link: "<a href=\"http://weekjuice.com/#/posts/" + currentPostId + "\" style=\"color: #455643;\" target=\"_blank\" title=\"View this week\'s post on weekjuice.com\">—Week No. " + currentWeek + "</a>"
        }
      }
    }, function (error, data) {
      if (error)
        console.log(error.message);
      else
        var currentCampaignId = data.id;
        sendCampaign(currentCampaignId);
    });

    var sendCampaign = function(currentCampaignId) {
      console.log(currentCampaignId);
      mailchimp.call('campaigns', 'send', { cid: currentCampaignId }, function (error, data) {
        if (error)
          console.log(error.message);
        else
          console.log(JSON.stringify(data));
      });
    }
  },

  init: function(){
    APP.runSchedule();
  }
};

APP.init();
