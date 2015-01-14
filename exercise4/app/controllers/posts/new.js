import Ember from 'ember';

// needs to be an ObjectController because we're working on 1 object!!
export default Ember.ObjectController.extend({
  actions: {
    done: function() {
      var self = this;
      this.get('model').save().then(function(post){
        self.transitionToRoute('posts.post.comments', post.get('id'));
      }, function(err) {
        console.log(err);
      });
    },
    cancel : function(post){
      post.destroyRecord();
      this.transitionToRoute('posts');
    }
  }
});
