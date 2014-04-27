var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.minute = 45;

function randomNumber() {
  var randomItem = Math.random();
  return randomItem;
};

var j = schedule.scheduleJob(rule, function() {
  console.log(randomNumber());
});