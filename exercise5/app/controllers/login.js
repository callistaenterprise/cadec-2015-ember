import Ember from 'ember';

export default Ember.Controller.extend({
  actions :{
    // the below actions are sent by the login component
    loginSuccess : function(user){
      console.debug('loginSuccess : ' + user.get('username'));
      this.transitionToRoute('posts');
    },
    loginFailure : function(username){
      console.debug('loginFailure : ' + username);
    }
  }
});
