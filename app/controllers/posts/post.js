import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing : false,
  actions : {
    edit : function(){
      this.set('isEditing', true);
    },
    done : function(post){
      this.set('isEditing', false);
      post.save();
    },
    cancel : function(post){
      post.rollback();
      this.set('isEditing', false);
      this.transitionTo('posts.post', user.get('id'));
    },
  }
});
