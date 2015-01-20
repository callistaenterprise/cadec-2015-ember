import Ember from 'ember';

export default Ember.Object.extend({
  currentUser : null,
  username : function(){
    var currentUser = this.get('currentUser');
    if(currentUser){
      return currentUser.get('username');
    } else {
      return 'no current user, please login!';
    }
  }.property('currentUser'),
  isLoggedIn : function(){
    var currentUser = this.get('currentUser');
    if(currentUser){
      return true;
    } else {
      return false;
    }
  }.property('currentUser')
});
