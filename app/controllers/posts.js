import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing : false,
  actions : {
    edit : function(post){
      console.log(post.get('id'));
      this.set('isEditing', true);
    },
    saveEdits : function(post){
      this.set('isEditing', false);
      post.save();
    }
  }
});
