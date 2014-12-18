import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var postModel = this.modelFor('posts.post');
    //return postModel.get('comments');
    return this.store.find('comment', {post_id:postModel.get('id')});
  }
});
