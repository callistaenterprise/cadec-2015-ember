import DS from 'ember-data';


var Comment = DS.Model.extend({
  post: DS.belongsTo('post'),
  user: DS.belongsTo('user'),
  body: DS.attr('string'),
  date: DS.attr('date')
});

Comment.reopenClass({
  FIXTURES: [
    {'id':'1', 'body':'A framework for creating ambitous web applications', 'date':new Date(), 'post':'1', 'user': '3'},
    {'id':'2', 'body':'It really is!', 'date':new Date(), 'post':'1', 'user': '3'},
    {'id':'3', 'body':'Beside the lake, beneath the trees', 'date':new Date(), 'post':'2', 'user': '1'},
    {'id':'4', 'body':'Fluttering and dancing in the breeze', 'date':new Date(), 'post':'2', 'user': '1'},
    {'id':'5', 'body':'That floats on high o er vales and hills', 'date':new Date(), 'post':'3', 'user': '2'},
    {'id':'6', 'body':'Continuous as the stars that shine', 'date':new Date(), 'post':'3', 'user': '2'}
  ]

});

export default Comment;
