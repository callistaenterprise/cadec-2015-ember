import Ember from "ember";
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:posts/post/comments', 'PostsPostCommentsController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: "controller:posts/post",
  postModel: Ember.computed.alias("controllers.posts/post.model")
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
