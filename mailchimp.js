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
    list_id:"744341", // check this
    subject:"This week on weekjuice",
    from_email:"neilrenicker@gmail.com",
    from_name:"Neil Renicker",
    to_name:"Neil Renicker",
    template_id:285117,
    folder_id:32125,
    tracking:{
      opens:true,
      html_clicks:true,
      text_clicks:true
    },
    auto_footer:true, // check this
    generate_text:true
  },
  content:{
    sections:{
      CURRENTPOST_CONTENT:"This will be the post content!", // check this
      CURRENTPOST_PERMALINK:"Permalink" // check this
    }
  }
}, function (error, data) {
  if (error)
    console.log(error.message);
  else
    console.log(JSON.stringify(data));
});
