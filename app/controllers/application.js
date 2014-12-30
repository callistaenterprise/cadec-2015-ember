import Ember from 'ember';

export default Ember.Controller.extend({
  _isLoggedIn : false,
  isLoggedIn : function(){
    var currentUser = this.session.get('currentUser');
    if(currentUser){
      this.set('_isLoggedIn', true);
    } else {
      this.set('_isLoggedIn', false);
    }
    return this.get('_isLoggedIn');
  }.property('session.currentUser'),
  username : function(){
    var currentUser = this.session.get('currentUser');
    if(currentUser){
      return currentUser.get('username');
    } else {
      return 'Please sign in!';
    }
  }.property('session.currentUser', 'session.currentUser.username')
});
