import DS from 'ember-data';


var Comment = DS.Model.extend({
  post: DS.belongsTo('post'),
  body: DS.attr('string'),
  date: DS.attr('date'),
  user: DS.belongsTo('user', {async:true})
});

Comment.reopenClass({
  FIXTURES: [
    {'id':'1', 'body':'A framework for creating ambitous web applications', date:'2014-12-12T11:00:41.141Z', 'post':'1'},
    {'id':'2', 'body':'It really is!', date:'2014-12-25T11:00:41.141Z', 'post':'1'},
    {'id':'3', 'body':'Beside the lake, beneath the trees',  date:'2014-11-24T11:00:41.141Z','post':'2'},
    {'id':'4', 'body':'Fluttering and dancing in the breeze', date:'2014-11-03T11:00:41.141Z', 'post':'2'},
    {'id':'5', 'body':'That floats on high o er vales and hills', date:'2014-12-07T11:00:41.141Z', 'post':'3'},
    {'id':'6', 'body':'Continuous as the stars that shine', date:'2014-12-05T11:00:41.141Z', 'post':'3'}
  ]

});

export default Comment;
