import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing : false,
  actions : {
    edit : function(post){
      console.log(post.get('id'));
      this.set('isEditing', true);
    },
    done : function(post){
      this.set('isEditing', false);
      post.save();
    }
  }
});
