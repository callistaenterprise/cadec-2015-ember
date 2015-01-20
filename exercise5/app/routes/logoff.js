import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.session.set('currentUser', null);
    this.transitionTo('login');
  }
});
