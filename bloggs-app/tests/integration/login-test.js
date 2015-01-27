import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Login integration test', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Page contents", function() {
  expect(3);
  visit('/login').then(function() {
    equal(find('.navbar').length, 1, "Page contains a navbar");
    equal(find('.form-group').length, 1, "contains a form group for logging in");
	fillIn('#login-username', 'stephen');
	  click('#btn-login');

	  andThen(function() {
	    equal( find('#posts-list div:first:contains(Stephens Blog)').length, 1);
	  });
  });
});
