import Ember from 'ember';

export default Ember.Route.extend({
  model : function(){
    return this.store.createRecord('post', {
      title : '',
      body: ''
      //user :  this should be the logged in user ..
    });
  }
});
