import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  posts: DS.hasMany('post', {async:true}),
  comments: DS.hasMany('comment', {async:true})
});
