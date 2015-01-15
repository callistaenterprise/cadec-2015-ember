import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map( function() {
  this.resource("posts", function() {
    this.route("new");
    this.resource("posts.post", {
      path: ":post_id"
    }, function() {
      this.route("comments");
    });
  });
});

export default Router;
