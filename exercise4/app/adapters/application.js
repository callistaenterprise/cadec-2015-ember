/*import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
});*/

import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

export default ApplicationAdapter;

