import Ember from 'ember';

export function dateTime(date, format) {
  if (!date) {
    return "";
  }
  if(!format || !(typeof format == 'string' || format instanceof String)){
    return moment(date).format('YYYY-MM-DD');
  } else {
    return moment(date).format(format);
  }
  return input;
};

export default Ember.Handlebars.makeBoundHelper(dateTime);
