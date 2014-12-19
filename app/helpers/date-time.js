import Ember from 'ember';
/* global moment */

export function dateTime(date, format) {
  if (!date) {
    return "";
  }
  if(!format || !(typeof format === 'string' || format instanceof String)){
    return moment(date).format('YYYY-MM-DD');
  } else {
    return moment(date).format(format);
  }
  return date;
}

export default Ember.Handlebars.makeBoundHelper(dateTime);
