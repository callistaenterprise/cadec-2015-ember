import Ember from "ember";
import {
  moduleForModel,
  test
  } from 'ember-qunit';

moduleForModel('user', 'User', {
  // Specify the other units that are required for this test.
  needs: ['model:comment', 'model:post']
});

test('it exists', function() {
  var user = this.subject();
  Ember.run(function(){
    user.set('firstName', 'stephen');
    user.set('lastName', 'white');
    equal(user.get('name'), 'stephen, white');
  });
  // var store = this.store();
  ok(!!user);
});
