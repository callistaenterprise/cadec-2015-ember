import {
  moduleFor,
  test
  } from 'ember-qunit';

moduleFor('model:login-vo', 'LoginVo', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it exists', function() {
  var loginVo = this.subject();
  ok(!!loginVo);
});
