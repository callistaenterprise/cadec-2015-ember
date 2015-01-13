import Ember from 'ember';

export default Ember.ObjectController.extend({
  isNewUser : false,
  actions :{
    login: function(){
      var self = this;
      var loginModel = this.get('model');
      var userName = loginModel.get('username');
      // find user based on user name
      this.store.find('user', {'username':userName}).then(
        function(users){
          if(users && users.get('length') > 0){
            // if found then add that user to the session
            self.session.set('currentUser', users.objectAt(0));
            self.transitionToRoute('posts');
          } else {
            // if not found direct user to new user
            self.transitionToRoute('login.newUser');
          }
      });
    }
  }
});
