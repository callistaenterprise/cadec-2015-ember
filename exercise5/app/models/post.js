import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  comments : DS.hasMany('comment', {async:true}),
  user: DS.belongsTo('user', {async:true})
});

Post.reopenClass({
  FIXTURES : [
    {'id':'1', 'title':'Stephens Blog', 'body':'Ember Rocks!', 'comments':['1', '2']},
    {'id':'2', 'title':'Jonases Blog', 'body':'A host, of golden daffodils', 'comments':['3', '4']},
    {'id':'3', 'title':'Sedinas Blog', 'body':'I wandered lonely as a cloud', 'comments':['5', '6']}
  ]

});


export default Post;
