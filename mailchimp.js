var MailChimpAPI = require('mailchimp').MailChimpAPI;
var apiKey = '39fc75668bec331bc4877d460103db1c-us2';

try {
  var api = new MailChimpAPI(apiKey, { version : '2.0' });
} catch (error) {
  console.log(error.message);
}

api.call('campaigns', 'create', {
  type:"regular",
  options:{
    list_id:"19af871d05",
    subject:"This week on weekjuice",
    from_email:"neilrenicker@gmail.com",
    from_name:"Neil Renicker",
    to_name:"Neil Renicker",
    template_id:285541,
    folder_id:32125,
    tracking:{
      opens:true,
      html_clicks:true,
      text_clicks:true
    },
    auto_footer:false,
    generate_text:true
  },
  content:{
    sections:{
      post_content:"Time to dance.",
      post_link:"<a href=\"http://weekjuice.com\" style=\"color: #455643;\" target=\"_blank\" title=\"View this week\'s post on weekjuice.com\">—Week No. 400</a>"
    }
  }
}, function (error, data) {
  if (error)
    console.log(error.message);
  else
    console.log(JSON.stringify(data));
});
