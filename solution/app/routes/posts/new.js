import Ember from 'ember';

export default Ember.Route.extend({
  model : function(){
    return this.store.createRecord('post', {
      title : '',
      body: '',
      user : this.session.get('currentUser')
      // here should we demonstrate usage of Ember.View and {{view "viewName"}}
    });
  }
});
