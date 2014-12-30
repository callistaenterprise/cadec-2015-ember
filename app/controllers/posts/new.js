import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    done: function() {
      var self = this;
      this.get('model').save().then(function(post){
        self.transitionTo('posts.post', post.get('id'));
      }, function(err) {
        console.log(err);
      });
    },
    cancel : function(post){
      post.destroyRecord();
      this.transitionTo('posts');
    }
  }
});
