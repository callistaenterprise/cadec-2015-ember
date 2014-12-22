import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "posts/post",
  postModel: Ember.computed.alias("controllers.posts/post.model"),
  comentText : '',
  actions : {
    post : function(){
      var postModel = this.get('postModel');
      var now = new Date();
      var comment = this.store.createRecord('comment', {
        answer : this.get('commentText'),
        date: now,
        post: postModel
      });

      postModel.save();

      var comments = postModel.get('comments').then(
        function(){
          comments.addObject(comment);
          postModel.save();
        }
      );


     /* comment.save().then(
        function(){
          var comments = postModel.get('comments').then(
            function(){
              comments.addObject(comment);
              postModel.save().then(function(){
                self.set('commentText', '');
              });
            });
        },
        function(error){
          console.log("error while saving comment :" + error);
        }
      );*/

    }
  }
});
