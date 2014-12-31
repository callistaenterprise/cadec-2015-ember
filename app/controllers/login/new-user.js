import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions : {
    done: function(user) {
      var self = this;
      user.save().then(function(user) {
        self.session.set('currentUser', user);
        self.transitionToRoute('posts');
      }, function(err) {
        console.log(err);
      });
    },
    cancel: function(user) {
      user.rollback();
      this.set('isEditing', false);
      this.transitionToRoute('login');
    }
  }
});
