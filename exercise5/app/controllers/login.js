import Ember from 'ember';

export default Ember.Controller.extend({
  actions :{
    // the below actions are sent by the login component
    loginSuccess : function(user){
      console.debug('loginSuccess : ' + user.get('username'));
      // if found then add that user to the session
      // after injection the session will show up as a property.
      this.session.set('currentUser', user);
      this.transitionToRoute('posts');
    },
    loginFailure : function(username){
      console.debug('loginFailure : ' + username);
      this.session.set('currentUser', null);
    }
  }
});
