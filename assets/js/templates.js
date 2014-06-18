Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("weekjuice");
  }

  data.buffer.push("<div class=\"l--container l--max-width l--sp_top-med\">\n  <h1>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n  <div class=\"t--tiny l--sp_top-tiny\">One doable, weekly goal for developers who want to be impressive at work.</div>\n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("—Week No. ");
  stack1 = helpers._triageMustache.call(depth0, "weekNumber", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

  data.buffer.push("<article class=\"l--sp_top-large\">\n  <p class=\"t--huge t--bold h--top-line-art\">");
  stack1 = helpers._triageMustache.call(depth0, "currentPost.primary_content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("l--sp_top-med l--block t--action t--medium t--italic")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "currentPost", options) : helperMissing.call(depth0, "link-to", "post", "currentPost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</article>\n\n<footer class=\"l--sp_top-large\">\n  <p class=\"t--tiny\">A tiny project by <a class=\"t--underline t--action\" href=\"http://twitter.com/neilrenicker\" title=\"Neil Renicker on Twitter\">Neil Renicker</a>.</p>\n</footer>\n");
  return buffer;
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <p><b>Note:</b> <i>");
  stack1 = helpers._triageMustache.call(depth0, "sourceNote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</i></p>\n    <a target=\"_blank\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("sourceUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "sourceTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n  ");
  return buffer;
  }

  data.buffer.push("<article class=\"l--sp_top-large\">\n  <p class=\"t--huge t--bold\">");
  stack1 = helpers._triageMustache.call(depth0, "primary_content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n  ");
  stack1 = helpers['if'].call(depth0, "sourceNote", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</article>\n");
  return buffer;
  
});

Ember.TEMPLATES["posts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <li>\n      <p>");
  stack1 = helpers._triageMustache.call(depth0, "post.primary_content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      ");
  stack1 = helpers['if'].call(depth0, "post.sourceNote", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <div>Posted ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "post", options) : helperMissing.call(depth0, "link-to", "post", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <p><b>Note:</b> <i>");
  stack1 = helpers._triageMustache.call(depth0, "post.sourceNote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</i></p>\n        <a target=\"_blank\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'href': ("post.sourceUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "post.sourceTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "creationDate", options) : helperMissing.call(depth0, "formatDate", "creationDate", options))));
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n    <li>\n      <p>ack! no posts.</p>\n    </li>\n  ");
  }

  data.buffer.push("<div class=\"posts-listing\">\n  <ul>\n  ");
  stack1 = helpers.each.call(depth0, "post", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});