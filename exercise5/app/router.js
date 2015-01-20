import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map( function() {
  this.resource("posts", function() {
    this.resource("posts.post", {
      path: ":post_id"
    }, function() {
      this.resource("posts.post.comments", {
        path: "comments"
      }, function(){
        this.route('comment', { path: ':comment_id' });
      });
    });
    this.route("new");
  });
  this.route("login");
  this.route("logoff");
});
export default Router;
