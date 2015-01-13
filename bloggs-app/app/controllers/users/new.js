import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions :{
    done : function(user){
      var self = this;
      user.save().then(function(user){
        self.transitionToRoute('users.user', user.get('id'));
      }, function(err) {
        console.log(err);
      });
    },
    cancel : function(user){
      user.destroyRecord();
      this.transitionToRoute('users');
    }
  }
});
