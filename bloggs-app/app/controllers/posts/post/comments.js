import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: "posts/post",
  postModel: Ember.computed.alias("controllers.posts/post.model"),
  commentText : '',
  isCommenting : false,
  actions : {
    post : function(){
      var self = this;
      var postModel = this.get('postModel');
      var now = new Date();
      var comment = self.store.createRecord('comment', {
        body : self.get('commentText'),
        date: now,
        post: postModel,
        user: this.session.get('currentUser')
      });


      comment.save().then(function(){
        postModel.get('comments').then(function(comments){
            comments.addObject(comment);
            postModel.save().then(
              function(){
                self.set('commentText', '');
                self.set('isCommenting', false);
              },
              function (error) {
                console.log("API error occured - " + error.responseText);
                alert("An error occured - REST API not available - Please try again");
              });
            });
      }, function(err) {
        console.log(err);
      });

    },
    addComment : function(){
      this.set('isCommenting', true);
    }
  },
  logState : function(text, object){
    console.log(text + ":" + "isDirty" +object.get('isDirty') + ", isSaving :" +object.get('isSaving') + ", isLoading :" +object.get('isLoading') + ", isLoaded" +object.get('isLoaded'));
  }
});
