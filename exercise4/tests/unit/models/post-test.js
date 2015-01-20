import {
  moduleForModel,
  test
  } from 'ember-qunit';

moduleForModel('post', 'Post', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:comment']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
