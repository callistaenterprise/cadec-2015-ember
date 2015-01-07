import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Post.reopenClass({
  FIXTURES: [
    {'id':'1', 'title':'Stephens Blog', 'body':'Ember Rocks!'},
    {'id':'2', 'title':'Jonases Blog', 'body':'A host, of golden daffodils'},
    {'id':'3', 'title':'Sedinas Blog', 'body':'I wandered lonely as a cloud'}
  ]

});


export default Post;
