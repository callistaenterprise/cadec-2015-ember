import Ember from 'ember';
// moment is not ecm6 so we need to import it into the global namespace
/* global moment */

/**
 * DateTime helper.
 * This will format js dates according to moments formats :http://momentjs.com/docs/#/parsing/string-formats/
 * If no format is supplied it will return a YYYY-MM-DD formatted date.
 * @param date
 * @param format
 * @returns {*}
 */
export function dateTime(date, format) {
  if (!date) {
    return "";
  }
  if(!format || !(typeof format === 'string' || format instanceof String)){
    return moment(date).format('YYYY-MM-DD');
  } else if(format === 'fromTo'){
    return moment(date).fromNow();
  } else {
    return moment(date).format(format);
  }
  return date;
}

export default Ember.Handlebars.makeBoundHelper(dateTime);
