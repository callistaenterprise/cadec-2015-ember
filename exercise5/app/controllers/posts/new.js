import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var self = this;
      this.get('model').save().then(function() {
        self.transitionToRoute('posts.index');
      }, function(post) {
        console.log('Error saving post: ' + post.get('title'));
        self.transitionToRoute('posts');
      });
    },
    cancel: function() {
      this.get('model').deleteRecord();
      this.transitionToRoute('posts');
    }
  }
});
