import Ember from 'ember';
import LoginVo from 'exercise5/models/login-vo';

export default Ember.Component.extend({

  // params
  store : {},

  // properties
  userFound : true,
  model : {},

  // events
  success : 'loginSuccess',

  failure : 'loginFailure',

  initVo : function(){
    this.set('model', LoginVo.create({}));
  }.on("init"),

  actions :{
    login: function(){
      var self = this;
      var loginModel = this.get('model');
      var userName = loginModel.get('username');
      // find user based on user name
      this.store.find('user', {'username':userName}).then(
        function(users){
          if(users && users.get('length') > 0){
            self.set('userFound', false);
            // if found then add that user to the session
            //self.session.set('currentUser', users.objectAt(0));
            self.sendAction('success', users.objectAt(0));
          } else {
            // if not found direct user to new user
            self.set('userFound', false);
            self.sendAction('failure', userName);
          }
        });
    }
  }
});
