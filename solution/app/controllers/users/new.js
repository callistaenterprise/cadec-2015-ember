import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions :{
    done : function(user){
      var self = this;
      user.save().then(function(user){
        self.transitionTo('users.user', user.get('id'));
      }, function(err) {
        console.log(err);
      });
    },
    cancel : function(user){
      user.destroyRecord();
      this.transitionTo('users');
    }
  }
});
