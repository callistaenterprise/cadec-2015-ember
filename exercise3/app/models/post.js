import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  comments : DS.hasMany('comment', {async:true})
});

Post.reopenClass({
  FIXTURES : [
    {'id':'1', 'title':'Stephens Blog', 'body':'Ember Rocks!', 'user':'1', 'comments':['1', '2']},
    {'id':'2', 'title':'Jonases Blog', 'body':'A host, of golden daffodils', 'user':'2', 'comments':['3', '4']},
    {'id':'3', 'title':'Sedinas Blog', 'body':'I wandered lonely as a cloud', 'user':'3', 'comments':['5', '6']}
  ]

});


export default Post;
