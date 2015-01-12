import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  posts: DS.hasMany('post', {async:true}),
  comments: DS.hasMany('comment', {async:true})
});

User.reopenClass({
  FIXTURES: [
    {'id':'1','username' : 'stephen','email':'stephen.white@callistaenterprise.se', 'posts' : ['1'], 'comments' : ['3', '4']},
    {'id':'2','username' : 'sedina','email':'sedina.oruc@callistaenterprise.se', 'posts': ['2'], 'comments' : ['5', '6']},
    {'id':'3','username' : 'jonas','email':'jonas.behmer@callistaenterprise.com', 'posts': ['3'], 'comments' : ['1', '2']}
  ]

});

export default User;
