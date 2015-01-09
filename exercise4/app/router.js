import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('posts', { path: '/posts' }, function() {
    this.route('new');
  });

  this.resource('posts.post', { path: '/posts/:post_id'}, function(){
    this.route('comments', { path: 'comments/:comment_id' });
  });
});

export default Router;
