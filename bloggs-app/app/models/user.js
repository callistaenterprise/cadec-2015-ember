import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  name : function(){
    return this.get('firstName') + ", " + this.get('lastName');
  }.property('firstName', 'lastName'),
  posts: DS.hasMany('post', {async:true}),
  comments: DS.hasMany('comment', {async:true})
});
