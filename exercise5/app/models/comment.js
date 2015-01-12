import DS from 'ember-data';


var Comment = DS.Model.extend({
  post: DS.belongsTo('post'),
  body: DS.attr('string')
});

Comment.reopenClass({
  FIXTURES: [
    {'id':'1', 'body':'A framework for creating ambitous web applications', 'post':'1'},
    {'id':'2', 'body':'It really is!', 'post':'1'},
    {'id':'3', 'body':'Beside the lake, beneath the trees', 'post':'2'},
    {'id':'4', 'body':'Fluttering and dancing in the breeze', 'post':'2'},
    {'id':'5', 'body':'That floats on high o er vales and hills', 'post':'3'},
    {'id':'6', 'body':'Continuous as the stars that shine', 'post':'3'}
  ]

});

export default Comment;
