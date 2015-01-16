import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  date: DS.attr('date'),
  post: DS.belongsTo('post'),
  user: DS.belongsTo('user')
});

