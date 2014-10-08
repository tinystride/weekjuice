Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        /purpose\n      ");
  }

  data.buffer.push("<header class=\"primary-nav\">\n  <div class=\"container max-width relative\">\n    <h1 class=\"primary-nav--logo\"><a href=\"/\" title=\"weekjuice\">weekjuice</a></h1>\n    <p class=\"primary-nav--message\">\n      Today is ");
  stack1 = helpers._triageMustache.call(depth0, "currentFullDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(". Make it great.\n    </p>\n  </div>\n</header>\n\n<div class=\"container max-width\">\n  <h2 class=\"header-message\">\n    One <span class=\"text-bold\">tiny goal</span> each week for developers who\n    dread getting <span class=\"text-bold\">stagnant</span> at work.\n  </h2>\n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <footer class=\"space-above_5\">\n    <small class=\"footer--peace-out-yo\">\n      A tiny project by <a class=\"text-underline text-action\"\n        href=\"http://twitter.com/neilrenicker\"\n        title=\"Neil Renicker on Twitter\">\n      Neil Renicker</a>\n      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("text-underline text-action"),
    'title': ("What's this for?")
  },hashTypes:{'class': "STRING",'title': "STRING"},hashContexts:{'class': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "purpose", options) : helperMissing.call(depth0, "link-to", "purpose", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </small>\n  </footer>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    —Week No. ");
  stack1 = helpers._triageMustache.call(depth0, "weekNumber", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<article class=\"post--container\">\n  <p class=\"post\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "currentPost.primary_content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("post--permalink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "currentPost", options) : helperMissing.call(depth0, "link-to", "post", "currentPost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</article>\n\n<section class=\"signup-callout clearfix\">\n  <h2 class=\"signup-callout--title\">Be your best every week</h2>\n  <p class=\"signup-callout--message\">\n    You want to be the best at your job, but it's hard to stay motivated.\n    <span class=\"text-bold\">weekjuice</span> is a simple weekly reminder\n    to keep doing the kinds of things that really matter as a passionate\n    developer and designer. It's a tiny, friendly nudge to help you be\n    impressive at work.\n  </p>\n  <!-- MailChimp Signup Form -->\n  <div id=\"mc_embed_signup\">\n    <form action=\"//neilrenicker.us2.list-manage.com/subscribe/post?u=6bf71f04542da9cf38cb16ea1&amp;id=19af871d05\"\n      method=\"post\" id=\"mc-embedded-subscribe-form\"\n      name=\"mc-embedded-subscribe-form\" class=\"signup-form\"\n      target=\"_blank\" novalidate>\n      <div class=\"mc-field-group\">\n        <label class=\"signup-form--label block space-above_2\" for=\"mce-EMAIL\">\n          Your Email Address Goes Here\n        </label>\n        <input type=\"email\" value=\"\" name=\"EMAIL\"\n          class=\"signup-form--input space-above_1\"\n          id=\"mce-EMAIL\">\n      </div>\n      <!-- Prevent bot signups: -->\n      <div id=\"mce-responses\">\n        <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n        <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n      </div>\n      <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_6bf71f04542da9cf38cb16ea1_19af871d05\" tabindex=\"-1\" value=\"\"></div>\n      <div class=\"space-above_1\">\n        <input type=\"submit\" value=\"Submit\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"signup-form--button button_positive\">\n        <span class=\"signup-form--helptext\">\n          You'll be able to unsubscribe with one click at any time.\n        </span>\n      </div>\n    </form>\n  </div>\n  <!--End MailChimp Signup Form -->\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<article class=\"post--container\">\n  <p class=\"post\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "primary_content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n</article>\n");
  return buffer;
  
});

Ember.TEMPLATES["purpose"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"strong-content space-above_3\">\n  <h2 class=\"strong-content--title text-purple\">/purpose</h2>\n  <div class=\"font-secondary\">\n    <p>\n      Meditation is an ancient practice. It's the art of focusing on a few things\n      long enough to impress them upon your conscious thought.\n    </p>\n    <p>\n      <span class=\"text-bold\">weekjuice</span> is one simple goal or assertion\n      for you to meditate on at the beginning of the week, sent to your\n      email inbox.\n    </p>\n    <p>\n      I have a habit of collecting little ways of thinking that help me focus\n      on some quality or skill I want to develop. The problem is, I can't keep\n      them all in my head. If I make a big list, I don't process any of them.\n    </p>\n    <p>\n      I need a slow, steady drip. I need to focus on one quality every week.\n      That's <span class=\"text-bold\">weekjuice</span>.\n    </p>\n    <p>\n      I made <span class=\"text-bold\">weekjuice</span> for myself, because\n      I wanted it to exist. If you like it too, that's all the better.\n    </p>\n  </div>\n  &#x2665; <a class=\"text-italic\" href=\"http://neilrenicker.com\"\n    title=\"My personal website\">Neil Renicker</a>\n</div>\n");
  
});