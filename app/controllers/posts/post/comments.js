import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: "posts/post",
  postModel: Ember.computed.alias("controllers.posts/post.model"),
  comentText : '',
  /*wcomments : function(){
    return this.get('model');
  }.property('model.@each'),*/
  actions : {
    post : function(){
      var self = this;
      var postModel = this.get('postModel');
      var now = new Date();
      var comment = self.store.createRecord('comment', {
        answer : self.get('commentText'),
        date: now,
        post: postModel
      });

      comment.save().then(function(){

        postModel.get('comments').then(function(){
          self.logState('2. post', postModel);

          postModel.get('comments').addObject(comment);

          self.logState('3. post', postModel);

          postModel.save().then(
            function(){
              self.set('commentText', '');
            },
            function (error) {
              console.log("API error occured - " + error.responseText);
              alert("An error occured - REST API not available - Please try again");
            });
          self.logState('1. post', postModel);
        });


      }, function(err) {
        // Error callback
        console.log(err);
      });

    }
  },
  logState : function(text, object){
    console.log(text + ":" + "isDirty" +object.get('isDirty') + ", isSaving :" +object.get('isSaving') + ", isLoading :" +object.get('isLoading') + ", isLoaded" +object.get('isLoaded'));
  }
});
