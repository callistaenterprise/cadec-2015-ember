import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createPost: function() {
      var title = this.get('title');
      var meta = this.get('meta');
      var body = this.get('body');

      var post = this.store.createRecord('post', {
        title: title,
        meta: meta,
        body: body
      });

      this.set('title', '');
      this.set('meta', '');
      this.set('body', '');

      // Save the new model
      post.save();
      this.transitionTo('posts');
    }
  }
});
