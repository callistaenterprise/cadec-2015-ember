import Ember from 'ember';
/* global Showdown */
export function markdownFormatter(input) {
  var showdown = new Showdown.converter();
  return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
}

export default Ember.Handlebars.makeBoundHelper(markdownFormatter);
