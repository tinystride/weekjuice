var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [1];


function randomNumber() {
  var randomItem = Math.random();
  return randomItem;
};

var j = schedule.scheduleJob(rule, function() {
  console.log(randomNumber());
});