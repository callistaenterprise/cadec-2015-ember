import Ember from 'ember';

export default Ember.Route.extend({
  model : function(){
    return this.store.createRecord('user', {
      username : '',
      email: ''
    });
  }
  // renderTemplate: function() {
//       this.render({ outlet: 'login' });
//     }
});
