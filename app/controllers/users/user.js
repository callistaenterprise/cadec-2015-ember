import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing : false,
  actions :{
    done : function(user){
      var self = this;
      user.save().then(function(user){
        self.transitionTo('users.user', user.get('id'));
        self.set('isEditing', false);
      }, function(err) {
        console.log(err);
      });
    },
    cancel : function(user){
      user.rollback();
      this.set('isEditing', false);
      this.transitionTo('users.user', user.get('id'));
    },
    edit : function(){
      this.set('isEditing', true);
    }
  }
});
