import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var postModel = this.modelFor('posts.post');
    return postModel.get('comments');
  }
});
